// hooks/useGameState.js
import { useState, useEffect } from 'react';
import { questions, levels } from '@/data/questions';

export function useGameState() {
  const [gameState, setGameState] = useState({
    currentLevel: 0,
    lives: 3,
    correctAnswers: 0,
    currentQuestionIndex: 0,
    questionQueue: [],
    isExplorer: true, // Chi sta rispondendo (true = player 1, false = player 2)
    phase: 'waiting', // 'waiting' | 'answering' | 'guessing' | 'result' | 'gameOver'
    selectedAnswer: null,
    guardianGuess: null,
  });

  // Inizializza la coda di domande per il livello corrente
  const initializeQuestionQueue = (levelId) => {
    const level = levels[levelId];
    const queue = [];

    // Aggiungi domande facili
    for (let i = 0; i < level.easy; i++) {
      queue.push({ ...questions.easy[i], difficulty: 'easy' });
    }
    // Aggiungi domande medie
    for (let i = 0; i < level.medium; i++) {
      queue.push({ ...questions.medium[i], difficulty: 'medium' });
    }
    // Aggiungi domande difficili
    for (let i = 0; i < level.hard; i++) {
      queue.push({ ...questions.hard[i], difficulty: 'hard' });
    }

    return queue;
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
        // Ogni 4 risposte corrette si guadagna una vita
        if (newCorrect % 4 === 0 && newLives < 6) {
          newLives++;
        }
      } else {
        newLives--;
      }

      // Check se passare al prossimo livello
      const nextLevel = levels.find(l => l.requiredCorrect === newCorrect);
      
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
      
      // Game over se vite finite
      if (prev.lives <= 0) {
        return { ...prev, phase: 'gameOver' };
      }

      // Se abbiamo finito le domande del livello, inizia il prossimo
      if (nextIndex >= prev.questionQueue.length) {
        const nextLevelId = prev.currentLevel + 1;
        if (nextLevelId < levels.length) {
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
          // Vittoria! Completato tutti i livelli
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
    currentLevelInfo: levels[gameState.currentLevel]
  };
}