// hooks/useGameState.js
import { useState } from 'react';
import { questions, levels } from '@/data/questions';
import { useLanguage } from '@/contexts/LanguageContext';

// Funzione helper per mescolare un array (Fisher-Yates shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function useGameState() {
  const { language } = useLanguage(); // Aggiungi questo
  
  const [gameState, setGameState] = useState({
    currentLevel: 0,
    lives: 3,
    correctAnswers: 0,
    currentQuestionIndex: 0,
    questionQueue: [],
    isExplorer: true,
    phase: 'waiting',
    selectedAnswer: null,
    guardianGuess: null,
  });

  // Inizializza la coda di domande per il livello corrente
  const initializeQuestionQueue = (levelId) => {
    const level = levels[language][levelId]; // Usa la lingua corretta
    const queue = [];

    // Mescola i pool di domande e prendi solo quelle necessarie
    const shuffledEasy = shuffleArray(questions[language].easy); // Usa la lingua corretta
    const shuffledMedium = shuffleArray(questions[language].medium);
    const shuffledHard = shuffleArray(questions[language].hard);

    // Aggiungi domande facili randomiche
    for (let i = 0; i < level.easy; i++) {
      queue.push({ ...shuffledEasy[i], difficulty: 'easy' });
    }
    // Aggiungi domande medie randomiche
    for (let i = 0; i < level.medium; i++) {
      queue.push({ ...shuffledMedium[i], difficulty: 'medium' });
    }
    // Aggiungi domande difficili randomiche
    for (let i = 0; i < level.hard; i++) {
      queue.push({ ...shuffledHard[i], difficulty: 'hard' });
    }

    // Mescola anche l'ordine finale delle domande nel livello
    return shuffleArray(queue);
  };

  // Avvia nuovo livello
  const startLevel = (levelId) => {
    const queue = initializeQuestionQueue(levelId);
    setGameState(prev => ({
      ...prev,
      currentLevel: levelId,
      questionQueue: queue,
      currentQuestionIndex: 0,
      phase: 'answering'
    }));
  };

  // Custode risponde
  const answerQuestion = (answer) => {
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      phase: 'guessing'
    }));
  };

  // Esploratore indovina
  const makeGuess = (guess) => {
    const isCorrect = guess === gameState.selectedAnswer;
    
    setGameState(prev => {
      let newCorrect = prev.correctAnswers;
      let newLives = prev.lives;
      
      if (isCorrect) {
        newCorrect++;
        if (newCorrect % 4 === 0 && newLives < 6) {
          newLives++;
        }
      } else {
        newLives--;
      }

      // Check se passare al prossimo livello
      const nextLevel = levels[language].find(l => l.requiredCorrect === newCorrect);
      
      return {
        ...prev,
        guardianGuess: guess,
        correctAnswers: newCorrect,
        lives: newLives,
        currentLevel: nextLevel ? nextLevel.id : prev.currentLevel,
        phase: 'result'
      };
    });
  };

  // Prossima domanda
  const nextQuestion = () => {
    setGameState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (prev.lives <= 0) {
        return { ...prev, phase: 'gameOver' };
      }

      if (nextIndex >= prev.questionQueue.length) {
        const nextLevelId = prev.currentLevel + 1;
        if (nextLevelId < levels[language].length) {
          const queue = initializeQuestionQueue(nextLevelId);
          return {
            ...prev,
            currentLevel: nextLevelId,
            questionQueue: queue,
            currentQuestionIndex: 0,
            isExplorer: !prev.isExplorer,
            phase: 'answering',
            selectedAnswer: null,
            guardianGuess: null,
          };
        } else {
          return { ...prev, phase: 'victory' };
        }
      }

      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        isExplorer: !prev.isExplorer,
        phase: 'answering',
        selectedAnswer: null,
        guardianGuess: null,
      };
    });
  };

  return {
    gameState,
    startLevel,
    answerQuestion,
    makeGuess,
    nextQuestion,
    currentQuestion: gameState.questionQueue[gameState.currentQuestionIndex],
    currentLevelInfo: levels[language][gameState.currentLevel]
  };
}