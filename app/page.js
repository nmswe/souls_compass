'use client';

import { useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout>
      <Card>
        {/* Language flags */}
        <div className="flex justify-end gap-2 mb-6">
          <button className="text-2xl hover:scale-110 transition-transform">🇮🇹</button>
          <button className="text-2xl hover:scale-110 transition-transform">🇬🇧</button>
        </div>

        {/* Title */}
        <Title className="text-2xl mb-4">Soul's Compass</Title>
        <div className="text-center mb-4">
          <p className="text-[#2D2D3F] text-lg font-semibold mb-2">🧭</p>
          <p className="text-sm text-[#4A4A5E] italic">
            "Nel deserto dell'anima, ogni incontro è una stella"
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
          <p className="text-[#2D2D3F] text-base">
            Scopri se i vostri sentieri si allineano
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-5">
          <Button onClick={() => router.push('/new-game')}>
            New Game
          </Button>
          
          <Button onClick={() => router.push('/join-game')}>
            Join Game
          </Button>
          
          <Button onClick={() => router.push('/instructions')}>
            Instructions
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}