'use client';

import { useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function InstructionsPage() {
  const router = useRouter();

  return (
    <PageLayout>
      <Card className="max-w-3xl overflow-y-auto max-h-[85vh]">
        <Title>How to Play</Title>

        {/* The Journey */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-3">🧭 The Journey</h2>
          <p className="text-[#2D2D3F] leading-relaxed">
            Soul's Compass is an emotional connection game that tests how well two people truly know each other. 
            Your goal is to journey together through <strong>7 levels of increasing intimacy</strong>, from the first Contact 
            to Universal Affinity.
          </p>
        </section>

        {/* Basic Rules */}
        <section className="mb-8 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">⚡ Basic Rules</h2>
          <ul className="space-y-2 text-[#2D2D3F]">
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>You play with <strong>one shared phone</strong> 📱</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Start with <strong>3 lives</strong> ❤️❤️❤️</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Every 4 correct answers, you earn <strong>1 bonus life</strong> (maximum 6 lives)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Lose 1 life for each wrong answer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>The game ends when you run out of lives</span>
            </li>
          </ul>
        </section>

        {/* How a Turn Works */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🔄 How a Turn Works</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-[#2D2D3F]"><strong>Player 1 (Guardian 🛡️)</strong> holds the phone, reads the question, and selects their answer</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-[#2D2D3F]"><strong>Player 1</strong> passes the phone to <strong>Player 2</strong> 📱➡️</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97757] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-[#2D2D3F]"><strong>Player 2 (Explorer 🔍)</strong> tries to guess what Player 1 answered</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#6B8E23] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
              <p className="text-[#2D2D3F]">If Player 2 guesses correctly → You earn a point!</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#8B4513] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✗</span>
              <p className="text-[#2D2D3F]">If they're wrong → You lose a life</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97757] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">↻</span>
              <p className="text-[#2D2D3F]"><strong>Player 2</strong> now becomes the Guardian (keeps the phone), reads the next question, answers, and passes the phone to <strong>Player 1</strong> who becomes the Explorer</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-[#F5E6D3] rounded-lg border-2 border-[#D4AF37]">
            <p className="text-[#2D2D3F] font-semibold mb-2">💡 Summary:</p>
            <p className="text-[#2D2D3F] text-sm">
              The phone alternates between players after each guess. The Explorer keeps the phone and becomes the Guardian for the next question.
            </p>
          </div>
        </section>

        {/* The 7 Levels */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🌟 The 7 Levels of Connection</h2>
          
          <div className="space-y-4">
            {/* Level 0 */}
            <div className="p-4 bg-gradient-to-r from-[#E8D4B8] to-[#D4B896] rounded-lg border-2 border-[#D4B896]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Level 0 - Contact</h3>
              <p className="text-sm text-[#4A4A5E] italic">You are here. The journey begins.</p>
            </div>

            {/* Level 1 */}
            <div className="p-4 bg-gradient-to-r from-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Level 1 - Connection</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 4 easy questions (2 options)</p>
              <p className="text-sm text-[#4A4A5E] italic">The first step toward mutual understanding.</p>
            </div>

            {/* Level 2 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg border-2 border-[#B8941F]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Level 2 - Opening</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 4 easy + 2 medium questions (3 options)</p>
              <p className="text-sm text-[#4A4A5E] italic">You begin to share something deeper.</p>
            </div>

            {/* Level 3 */}
            <div className="p-4 bg-gradient-to-r from-[#E8956F] to-[#D97757] rounded-lg border-2 border-[#D97757]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Level 3 - Building</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 2 easy + 4 medium questions</p>
              <p className="text-sm text-[#4A4A5E] italic">You're building a solid foundation of mutual knowledge.</p>
            </div>

            {/* Level 4 */}
            <div className="p-4 bg-gradient-to-r from-[#D97757] to-[#C4603F] rounded-lg border-2 border-[#C4603F]">
              <h3 className="font-bold text-white mb-1">Level 4 - Attunement</h3>
              <p className="text-sm text-white mb-2">✓ 2 easy + 2 medium + 2 hard questions (4 options)</p>
              <p className="text-sm text-[#F5E6D3] italic">You're increasingly aligned in your choices.</p>
            </div>

            {/* Level 5 */}
            <div className="p-4 bg-gradient-to-r from-[#C4603F] to-[#B8941F] rounded-lg border-2 border-[#8B4513]">
              <h3 className="font-bold text-white mb-1">Level 5 - Fusion</h3>
              <p className="text-sm text-white mb-2">✓ 3 medium + 3 hard questions</p>
              <p className="text-sm text-[#F5E6D3] italic">Your souls begin to resonate together.</p>
            </div>

            {/* Level 6 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37] shadow-lg">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Level 6 - Universal Affinity 🌟</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 6 hard questions</p>
              <p className="text-sm text-[#4A4A5E] italic">The highest possible connection. You are perfectly synchronized.</p>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="mb-8 p-5 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-lg border-2 border-[#B8941F]">
          <h2 className="text-lg font-bold text-[#2D2D3F] mb-2">💡 Tip</h2>
          <p className="text-[#2D2D3F] italic">
            Always answer honestly. The real goal isn't to win, but to discover how well you truly know each other.
          </p>
        </section>

        {/* Buttons */}
        <div className="space-y-4">
          <Button onClick={() => router.push('/game')}>
            Start Playing
          </Button>
          <Button variant="secondary" onClick={() => router.push('/')}>
            Back to Home
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}