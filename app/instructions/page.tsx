// app/instructions/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function InstructionsPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].instructions;

  return (
    <PageLayout>
      <Card className="max-w-3xl overflow-y-auto max-h-[85vh]">
        <Title>{t.title}</Title>

        {/* The Journey */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-3">🧭 {t.theJourney}</h2>
          <p className="text-[#2D2D3F] leading-relaxed">
            {t.journeyDescription}
          </p>
        </section>

        {/* Basic Rules */}
        <section className="mb-8 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">⚡ {t.basicRules}</h2>
          <ul className="space-y-2 text-[#2D2D3F]">
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>{t.sharedPhone} 📱</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>{t.startLives} ❤️❤️❤️</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>{t.bonusLife}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>{t.loseLife}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>{t.gameEnd}</span>
            </li>
          </ul>
        </section>

        {/* How a Turn Works */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🔄 {t.howTurnWorks}</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-[#2D2D3F]">{t.step1}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-[#2D2D3F]">{t.step2} 📱➡️</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97757] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-[#2D2D3F]">{t.step3}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#6B8E23] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
              <p className="text-[#2D2D3F]">{t.stepCorrect}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#8B4513] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✗</span>
              <p className="text-[#2D2D3F]">{t.stepWrong}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97757] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">↻</span>
              <p className="text-[#2D2D3F]">{t.stepAlternate}</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-[#F5E6D3] rounded-lg border-2 border-[#D4AF37]">
            <p className="text-[#2D2D3F] font-semibold mb-2">💡 {t.summary}</p>
            <p className="text-[#2D2D3F] text-sm">
              {t.summaryText}
            </p>
          </div>
        </section>

        {/* The 7 Levels */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🌟 {t.levels}</h2>
          
          <div className="space-y-4">
            {/* Level 0 */}
            <div className="p-4 bg-gradient-to-r from-[#E8D4B8] to-[#D4B896] rounded-lg border-2 border-[#D4B896]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">{language === 'en' ? 'Level 0' : 'Livello 0'} - {t.level0}</h3>
              <p className="text-sm text-[#4A4A5E] italic">{t.level0Desc}</p>
            </div>

            {/* Level 1 */}
            <div className="p-4 bg-gradient-to-r from-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">{language === 'en' ? 'Level 1' : 'Livello 1'} - {t.level1}</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ {t.level1Questions}</p>
              <p className="text-sm text-[#4A4A5E] italic">{t.level1Desc}</p>
            </div>

            {/* Level 2 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg border-2 border-[#B8941F]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">{language === 'en' ? 'Level 2' : 'Livello 2'} - {t.level2}</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ {t.level2Questions}</p>
              <p className="text-sm text-[#4A4A5E] italic">{t.level2Desc}</p>
            </div>

            {/* Level 3 */}
            <div className="p-4 bg-gradient-to-r from-[#E8956F] to-[#D97757] rounded-lg border-2 border-[#D97757]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">{language === 'en' ? 'Level 3' : 'Livello 3'} - {t.level3}</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ {t.level3Questions}</p>
              <p className="text-sm text-[#4A4A5E] italic">{t.level3Desc}</p>
            </div>

            {/* Level 4 */}
            <div className="p-4 bg-gradient-to-r from-[#D97757] to-[#C4603F] rounded-lg border-2 border-[#C4603F]">
              <h3 className="font-bold text-white mb-1">{language === 'en' ? 'Level 4' : 'Livello 4'} - {t.level4}</h3>
              <p className="text-sm text-white mb-2">✓ {t.level4Questions}</p>
              <p className="text-sm text-[#F5E6D3] italic">{t.level4Desc}</p>
            </div>

            {/* Level 5 */}
            <div className="p-4 bg-gradient-to-r from-[#C4603F] to-[#B8941F] rounded-lg border-2 border-[#8B4513]">
              <h3 className="font-bold text-white mb-1">{language === 'en' ? 'Level 5' : 'Livello 5'} - {t.level5}</h3>
              <p className="text-sm text-white mb-2">✓ {t.level5Questions}</p>
              <p className="text-sm text-[#F5E6D3] italic">{t.level5Desc}</p>
            </div>

            {/* Level 6 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37] shadow-lg">
              <h3 className="font-bold text-[#2D2D3F] mb-1">{language === 'en' ? 'Level 6' : 'Livello 6'} - {t.level6} 🌟</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ {t.level6Questions}</p>
              <p className="text-sm text-[#4A4A5E] italic">{t.level6Desc}</p>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="mb-8 p-5 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-lg border-2 border-[#B8941F]">
          <h2 className="text-lg font-bold text-[#2D2D3F] mb-2">💡 {t.tip}</h2>
          <p className="text-[#2D2D3F] italic">
            {t.tipText}
          </p>
        </section>

        {/* Buttons */}
        <div className="space-y-4">
          <Button onClick={() => router.push('/game')}>
            {t.startPlaying}
          </Button>
          <Button variant="secondary" onClick={() => router.push('/')}>
            {t.backToHome}
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}