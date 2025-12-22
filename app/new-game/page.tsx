'use client';

import { useGameState } from '@/hooks/useGameState';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function GamePage() {
  const { 
    gameState, 
    startLevel, 
    answerQuestion, 
    makeGuess, 
    nextQuestion,
    currentQuestion,
    currentLevelInfo 
  } = useGameState();

  // Schermata iniziale
  if (gameState.phase === 'waiting') {
    return (
      <PageLayout>
        <Card>
          <Title>Soul's Compass</Title>
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-[#D97757] mb-3">✨ Pronto per iniziare? ✨</p>
            <p className="text-[#4A4A5E] text-sm mb-6">Un viaggio attraverso 7 livelli di connessione</p>
            <div className="mt-4 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
              <p className="text-[#2D2D3F] font-semibold">❤️ 3 vite • 🎯 Affinità Universale</p>
            </div>
          </div>
          <Button onClick={() => startLevel(1)}>
            Inizia Gioco
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
          <Title level={gameState.currentLevel}>Game Over</Title>
          <div className="text-center mb-8">
            <div className="mb-8">
              <div className="text-6xl mb-4">🌙</div>
              <p className="text-lg mb-3 text-[#4A4A5E]">Il tuo viaggio si ferma qui</p>
              <p className="text-xl mb-4 text-[#2D2D3F]">Hai raggiunto:</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#E8D4B8] to-[#D4B896] rounded-xl border-2 border-[#D4AF37]">
              <p className="text-3xl font-bold text-[#2D2D3F] mb-4">
                {currentLevelInfo.name}
              </p>
              <p className="text-[#4A4A5E] text-lg">
                ✓ {gameState.correctAnswers} risposte corrette
              </p>
            </div>
          </div>
          <Button onClick={() => window.location.reload()}>
            Gioca Ancora
          </Button>
        </Card>
      </PageLayout>
    );
  }

  // Vittoria!
  if (gameState.phase === 'victory') {
    return (
      <PageLayout>
        <Card>
          <Title level={6}>🌟 Affinità Universale 🌟</Title>
          <div className="text-center mb-8">
            <div className="mb-8">
              <div className="text-7xl mb-5 animate-pulse">⭐</div>
              <p className="text-xl mb-5 text-[#2D2D3F]">
                Complimenti! Avete raggiunto il massimo livello di connessione!
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-xl border-2 border-[#B8941F]">
              <p className="text-4xl font-bold text-[#2D2D3F] mb-2">
                {gameState.correctAnswers}
              </p>
              <p className="text-[#2D2D3F] text-lg">risposte corrette</p>
            </div>
          </div>
          <Button onClick={() => window.location.reload()}>
            Nuova Partita
          </Button>
        </Card>
      </PageLayout>
    );
  }

  // Fase risposta (Custode risponde)
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
                <span className="text-sm font-semibold text-[#D4AF37]">
                  ✓ {gameState.correctAnswers}
                </span>
              </div>
            </div>
            <Title level={gameState.currentLevel} className="text-lg mb-5">
              {currentQuestion?.text}
            </Title>
            <div className="text-center p-4 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37] mb-6">
              <p className="text-[#2D2D3F] font-semibold text-sm">
                🛡️ Tu sei il CUSTODE
              </p>
              <p className="text-[#4A4A5E] text-xs mt-1">
                Rispondi sinceramente alla domanda
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

  // Fase indovinare (Esploratore indovina)
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
                <span className="text-sm font-semibold text-[#D4AF37]">
                  ✓ {gameState.correctAnswers}
                </span>
              </div>
            </div>
            <Title level={gameState.currentLevel} className="text-lg mb-5">
              {currentQuestion?.text}
            </Title>
            <div className="text-center p-4 bg-[#E8D4B8] rounded-lg border-2 border-[#D97757] mb-6">
              <p className="text-[#2D2D3F] font-semibold text-sm">
                🔍 Tu sei l'ESPLORATORE
              </p>
              <p className="text-[#4A4A5E] text-xs mt-1">
                Cosa ha risposto il Custode?
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

  // Risultato del turno
  if (gameState.phase === 'result') {
    const isCorrect = gameState.selectedAnswer === gameState.guardianGuess;
    
    return (
      <PageLayout>
        <Card>
          <Title 
            level={gameState.currentLevel}
            className={isCorrect ? 'from-[#6B8E23] to-[#9ACD32]' : 'from-[#8B4513] to-[#A0522D]'}
          >
            {isCorrect ? '✓ Esatto!' : '✗ Non questa volta'}
          </Title>
          
          <div className="text-center mb-8">
            <div className="mb-8 space-y-4">
              <div className="p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
                <p className="text-[#4A4A5E] text-sm mb-2">🛡️ Il Custode ha risposto:</p>
                <p className="text-[#2D2D3F] font-bold text-lg">{gameState.selectedAnswer}</p>
              </div>
              <div className="p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D97757]">
                <p className="text-[#4A4A5E] text-sm mb-2">🔍 L'Esploratore ha indovinato:</p>
                <p className="text-[#2D2D3F] font-bold text-lg">{gameState.guardianGuess}</p>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-[#E8D4B8] to-[#D4B896] rounded-xl border-2 border-[#D4AF37]">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-[#4A4A5E] mb-2">Vite</p>
                  <p className="text-2xl">{'❤️'.repeat(gameState.lives)}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4A4A5E] mb-2">Corrette</p>
                  <p className="text-2xl font-bold text-[#D4AF37]">{gameState.correctAnswers}</p>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-[#D4AF37]">
                <p className="text-sm text-[#4A4A5E] mb-2">Livello attuale</p>
                <p className="text-xl font-bold text-[#2D2D3F]">
                  {currentLevelInfo.name}
                </p>
              </div>
            </div>
          </div>

          <Button onClick={nextQuestion}>
            {gameState.lives > 0 ? 'Prossima Domanda' : 'Vedi Risultato'}
          </Button>
        </Card>
      </PageLayout>
    );
  }

  return null;
}