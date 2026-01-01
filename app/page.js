// app/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function Home() {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].home;

  return (
    <PageLayout>
      <Card>
        {/* Language flags */}
        <div className="flex justify-end gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${
              language === 'it' 
                ? 'bg-[#D4AF37] text-[#2D2D3F] font-bold scale-105' 
                : 'bg-[#E8D4B8] text-[#2D2D3F] hover:bg-[#D4B896]'
            }`}
            onClick={() => toggleLanguage('it')}
          >
            🇮🇹 Italiano
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition-all ${
              language === 'en' 
                ? 'bg-[#D4AF37] text-[#2D2D3F] font-bold scale-105' 
                : 'bg-[#E8D4B8] text-[#2D2D3F] hover:bg-[#D4B896]'
            }`}
            onClick={() => toggleLanguage('en')}
          >
            🇬🇧 English
          </button>
        </div>

        {/* Title */}
        <Title className="text-2xl mb-4">{t.title}</Title>
        <div className="text-center mb-4">
          <p className="text-[#2D2D3F] text-lg font-semibold mb-2">🧭</p>
          <p className="text-sm text-[#4A4A5E] italic">
            "{t.subtitle}"
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
          <p className="text-[#2D2D3F] text-base">
            {t.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-5">
          <Button onClick={() => router.push('/game')}>
            {t.newGame}
          </Button>
                    
          <Button onClick={() => router.push('/instructions')}>
            {t.instructions}
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}