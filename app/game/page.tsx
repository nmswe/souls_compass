// app/game/page.tsx
'use client';

import dynamic from 'next/dynamic';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

// Previeni il rendering server-side per evitare hydration mismatch
const GameContent = dynamic(() => Promise.resolve(GamePage), {
  ssr: false,
});

function GamePage() {
  const { 
    gameState, 
    startLevel, 
    answerQuestion, 
    makeGuess, 
    nextQuestion,
    currentQuestion,
    currentLevelInfo 
  } = useGameState();

  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].game;

  // Initial screen
  if (gameState.phase === 'waiting') {
    return (
      <PageLayout>
        <Card>
          <Title>Soul's Compass</Title>
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-[#D97757] mb-3">✨ {t.readyToStart} ✨</p>
            <p className="text-[#4A4A5E] text-sm mb-6">{t.journeyThrough}</p>
            <div className="mt-4 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
              <p className="text-[#2D2D3F] font-semibold">{t.livesAndGoal}</p>
            </div>
          </div>
          <Button onClick={() => startLevel(1)}>
            {t.startGame}
          </Button>
        </Card>
      </PageLayout>
    );
  }

  // Game Over
  if (gameState.phase === 'gameOver') {
    return (
      <PageLayout>
        <Card>
          <Title level={gameState.currentLevel}>{t.gameOver}</Title>
          <div className="text-center mb-8">
            <div className="mb-8">
              <div className="text-6xl mb-4">🌙</div>
              <p className="text-lg mb-3 text-[#4A4A5E]">{t.journeyEnds}</p>
              <p className="text-xl mb-4 text-[#2D2D3F]">{t.youReached}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#E8D4B8] to-[#D4B896] rounded-xl border-2 border-[#D4AF37]">
              <p className="text-3xl font-bold text-[#2D2D3F] mb-4">
                {currentLevelInfo.name}
              </p>
              <p className="text-[#000000] text-lg">
                ✓ {gameState.correctAnswers} {t.correctAnswers}
              </p>
            </div>
          </div>
          <Button onClick={() => window.location.reload()}>
            {t.playAgain}
          </Button>
        </Card>
      </PageLayout>
    );
  }

  // Victory!
  if (gameState.phase === 'victory') {
    return (
      <PageLayout>
        <Card>
          <Title level={6}>🌟 {t.victoryTitle} 🌟</Title>
          <div className="text-center mb-8">
            <div className="mb-8">
              <div className="text-7xl mb-5 animate-pulse">⭐</div>
              <p className="text-xl mb-5 text-[#2D2D3F]">
                {t.congratulations}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-xl border-2 border-[#B8941F]">
              <p className="text-4xl font-bold text-[#000000] mb-2">
                {gameState.correctAnswers}
              </p>
              <p className="text-[#2D2D3F] text-lg">{t.correctAnswers}</p>
            </div>
          </div>
          <Button onClick={() => window.location.reload()}>
            {t.newGame}
          </Button>
        </Card>
      </PageLayout>
    );
  }

  // Answering phase (Guardian answers)
  if (gameState.phase === 'answering') {
    return (
      <PageLayout>
        <Card>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-5 p-4 bg-gradient-to-r from-[#E8D4B8] to-[#D4B896] rounded-lg border border-[#D4AF37]">
              <span className="text-sm font-bold text-[#2D2D3F] flex items-center gap-2">
                <span className="text-lg">🧭</span>
                {currentLevelInfo.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#C4603F]">
                  {'❤️'.repeat(gameState.lives)}
                </span>
                <span className="text-sm font-semibold text-[#000000]">
                  ✓ {gameState.correctAnswers}
                </span>
              </div>
            </div>
            <Title level={gameState.currentLevel} className="text-lg mb-5">
              {currentQuestion?.text}
            </Title>
            <div className="text-center p-4 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37] mb-6">
              <p className="text-[#2D2D3F] font-semibold text-sm">
                🛡️ {t.youAreGuardian}
              </p>
              <p className="text-[#4A4A5E] text-xs mt-1">
                {t.answerHonestly}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentQuestion?.answers.map((answer, idx) => (
              <Button
                key={idx}
                onClick={() => answerQuestion(answer)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Card>
      </PageLayout>
    );
  }

  // Guessing phase (Explorer guesses)
  if (gameState.phase === 'guessing') {
    return (
      <PageLayout>
        <Card>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-5 p-4 bg-gradient-to-r from-[#E8D4B8] to-[#D4B896] rounded-lg border border-[#D4AF37]">
              <span className="text-sm font-bold text-[#2D2D3F] flex items-center gap-2">
                <span className="text-lg">🧭</span>
                {currentLevelInfo.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-[#C4603F]">
                  {'❤️'.repeat(gameState.lives)}
                </span>
                <span className="text-sm font-semibold text-[#000000]">
                  ✓ {gameState.correctAnswers}
                </span>
              </div>
            </div>
            <Title level={gameState.currentLevel} className="text-lg mb-5">
              {currentQuestion?.text}
            </Title>
            <div className="text-center p-4 bg-[#E8D4B8] rounded-lg border-2 border-[#D97757] mb-6">
              <p className="text-[#2D2D3F] font-semibold text-sm">
                🔍 {t.youAreExplorer}
              </p>
              <p className="text-[#4A4A5E] text-xs mt-1">
                {t.whatDidGuardianAnswer}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentQuestion?.answers.map((answer, idx) => (
              <Button
                key={idx}
                onClick={() => makeGuess(answer)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Card>
      </PageLayout>
    );
  }

  // Turn result
  if (gameState.phase === 'result') {
    const isCorrect = gameState.selectedAnswer === gameState.guardianGuess;
    
    return (
      <PageLayout>
        <Card>
          <Title 
            level={gameState.currentLevel}
            className={isCorrect ? 'from-[#6B8E23] to-[#9ACD32]' : 'from-[#8B4513] to-[#A0522D]'}
          >
            {isCorrect ? `✓ ${t.correctMessage}` : `✗ ${t.notThisTime}`}
          </Title>
          
          <div className="text-center mb-8">
            <div className="mb-8 space-y-4">
              <div className="p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
                <p className="text-[#4A4A5E] text-sm mb-2">🛡️ {t.guardianAnswered}</p>
                <p className="text-[#2D2D3F] font-bold text-lg">{gameState.selectedAnswer}</p>
              </div>
              <div className="p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D97757]">
                <p className="text-[#4A4A5E] text-sm mb-2">🔍 {t.explorerGuessed}</p>
                <p className="text-[#2D2D3F] font-bold text-lg">{gameState.guardianGuess}</p>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-[#E8D4B8] to-[#D4B896] rounded-xl border-2 border-[#D4AF37]">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-[#4A4A5E] mb-2">{t.lives}</p>
                  <p className="text-2xl">{'❤️'.repeat(gameState.lives)}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4A4A5E] mb-2">{t.correctCount}</p>
                  <p className="text-2xl font-bold text-[#000000]">{gameState.correctAnswers}</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[#D4AF37]">
                <p className="text-sm text-[#4A4A5E] mb-2">{t.currentLevel}</p>
                <p className="text-xl font-bold text-[#2D2D3F]">
                  {currentLevelInfo.name}
                </p>
              </div>
            </div>
          </div>

          <Button onClick={nextQuestion}>
            {gameState.lives > 0 ? t.nextQuestion : t.seeResult}
          </Button>
        </Card>
      </PageLayout>
    );
  }

  return null;
}

export default function Page() {
  return <GameContent />;
}