// hooks/useGameState.ts
import { useState } from 'react';
import { questions, levels } from '@/data/questions';
import { useLanguage } from '@/contexts/LanguageContext';

interface Question {
  id: string;
  text: string;
  answers: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface GameState {
  currentLevel: number;
  lives: number;
  correctAnswers: number;
  currentQuestionIndex: number;
  questionQueue: Question[];
  isExplorer: boolean;
  phase: 'waiting' | 'answering' | 'guessing' | 'result' | 'gameOver' | 'victory';
  selectedAnswer: string | null;
  guardianGuess: string | null;
}

// Funzione helper per mescolare un array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function useGameState() {
  const { language } = useLanguage();

  const [gameState, setGameState] = useState<GameState>({
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
  const initializeQuestionQueue = (levelId: number): Question[] => {
    const langKey = language as keyof typeof levels;
    const level = levels[langKey][levelId];
    const queue: Question[] = [];

    // Mescola i pool di domande e prendi solo quelle necessarie
    const shuffledEasy = shuffleArray(questions[langKey].easy);
    const shuffledMedium = shuffleArray(questions[langKey].medium);
    const shuffledHard = shuffleArray(questions[langKey].hard);

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
  const startLevel = (levelId: number) => {
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
  const answerQuestion = (answer: string) => {
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      phase: 'guessing'
    }));
  };

  // Esploratore indovina
  const makeGuess = (guess: string) => {
    const isCorrect = guess === gameState.selectedAnswer;
    const langKey = language as keyof typeof levels;

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
      const nextLevel = levels[langKey].find(l => l.requiredCorrect === newCorrect);

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
    const langKey = language as keyof typeof levels;

    setGameState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;

      if (prev.lives <= 0) {
        return { ...prev, phase: 'gameOver' };
      }

      if (nextIndex >= prev.questionQueue.length) {
        const nextLevelId = prev.currentLevel + 1;
        if (nextLevelId < levels[langKey].length) {
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

  const langKey = language as keyof typeof levels;

  return {
    gameState,
    startLevel,
    answerQuestion,
    makeGuess,
    nextQuestion,
    currentQuestion: gameState.questionQueue[gameState.currentQuestionIndex] as Question | undefined,
    currentLevelInfo: levels[langKey][gameState.currentLevel]
  };
}
