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
        <Title>Come Si Gioca</Title>

        {/* Il Viaggio */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-3">🧭 Il Viaggio</h2>
          <p className="text-[#2D2D3F] leading-relaxed">
            Soul's Compass è un gioco di connessione emotiva che mette alla prova quanto due persone si conoscono davvero. 
            Il vostro obiettivo è attraversare insieme <strong>7 livelli di intimità crescente</strong>, dal primo Contatto 
            fino all'Affinità Universale.
          </p>
        </section>

        {/* Regole Base */}
        <section className="mb-8 p-5 bg-[#E8D4B8] rounded-lg border-2 border-[#D4AF37]">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">⚡ Le Regole Base</h2>
          <ul className="space-y-2 text-[#2D2D3F]">
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Iniziate con <strong>3 vite</strong> ❤️❤️❤️</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Ogni 4 risposte corrette, guadagnate <strong>1 vita bonus</strong> (massimo 6 vite)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Perdete 1 vita per ogni risposta sbagliata</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D4AF37] font-bold">•</span>
              <span>Il gioco termina quando finite le vite</span>
            </li>
          </ul>
        </section>

        {/* Come Funziona Un Turno */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🔄 Come Funziona Un Turno</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-[#2D2D3F]"><strong>Il Custode</strong> 🛡️ risponde per primo a una domanda</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D4AF37] text-[#2D2D3F] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-[#2D2D3F]"><strong>L'Esploratore</strong> 🔍 cerca di indovinare cosa ha risposto il Custode</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#6B8E23] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
              <p className="text-[#2D2D3F]">Se l'Esploratore indovina correttamente → Continuate!</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#8B4513] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✗</span>
              <p className="text-[#2D2D3F]">Se sbaglia → Perdete una vita</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97757] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">↻</span>
              <p className="text-[#2D2D3F]">I ruoli si alternano ad ogni domanda</p>
            </div>
          </div>
        </section>

        {/* I 7 Livelli */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#D97757] mb-4">🌟 I 7 Livelli di Connessione</h2>
          
          <div className="space-y-4">
            {/* Livello 0 */}
            <div className="p-4 bg-gradient-to-r from-[#E8D4B8] to-[#D4B896] rounded-lg border-2 border-[#D4B896]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Livello 0 - Contatto</h3>
              <p className="text-sm text-[#4A4A5E] italic">Siete qui. Il viaggio comincia.</p>
            </div>

            {/* Livello 1 */}
            <div className="p-4 bg-gradient-to-r from-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Livello 1 - Connessione</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 4 domande facili (2 opzioni)</p>
              <p className="text-sm text-[#4A4A5E] italic">Il primo passo verso la reciproca comprensione.</p>
            </div>

            {/* Livello 2 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] rounded-lg border-2 border-[#B8941F]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Livello 2 - Apertura</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 4 domande facili + 2 medie (3 opzioni)</p>
              <p className="text-sm text-[#4A4A5E] italic">Iniziate a condividere qualcosa di più profondo.</p>
            </div>

            {/* Livello 3 */}
            <div className="p-4 bg-gradient-to-r from-[#E8956F] to-[#D97757] rounded-lg border-2 border-[#D97757]">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Livello 3 - Costruzione</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 2 domande facili + 4 medie</p>
              <p className="text-sm text-[#4A4A5E] italic">State costruendo una base solida di conoscenza reciproca.</p>
            </div>

            {/* Livello 4 */}
            <div className="p-4 bg-gradient-to-r from-[#D97757] to-[#C4603F] rounded-lg border-2 border-[#C4603F]">
              <h3 className="font-bold text-white mb-1">Livello 4 - Sintonizzazione</h3>
              <p className="text-sm text-white mb-2">✓ 2 domande facili + 2 medie + 2 difficili (4 opzioni)</p>
              <p className="text-sm text-[#F5E6D3] italic">Siete sempre più allineati nelle vostre scelte.</p>
            </div>

            {/* Livello 5 */}
            <div className="p-4 bg-gradient-to-r from-[#C4603F] to-[#B8941F] rounded-lg border-2 border-[#8B4513]">
              <h3 className="font-bold text-white mb-1">Livello 5 - Fusione</h3>
              <p className="text-sm text-white mb-2">✓ 3 domande medie + 3 difficili</p>
              <p className="text-sm text-[#F5E6D3] italic">Le vostre anime iniziano a risuonare insieme.</p>
            </div>

            {/* Livello 6 */}
            <div className="p-4 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#D4AF37] rounded-lg border-2 border-[#D4AF37] shadow-lg">
              <h3 className="font-bold text-[#2D2D3F] mb-1">Livello 6 - Affinità Universale 🌟</h3>
              <p className="text-sm text-[#2D2D3F] mb-2">✓ 6 domande difficili</p>
              <p className="text-sm text-[#4A4A5E] italic">La massima connessione possibile. Siete perfettamente sincronizzati.</p>
            </div>
          </div>
        </section>

        {/* Consiglio */}
        <section className="mb-8 p-5 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-lg border-2 border-[#B8941F]">
          <h2 className="text-lg font-bold text-[#2D2D3F] mb-2">💡 Consiglio</h2>
          <p className="text-[#2D2D3F] italic">
            Rispondete sempre con sincerità. Il vero obiettivo non è vincere, ma scoprire quanto realmente vi conoscete.
          </p>
        </section>

        {/* Bottoni */}
        <div className="space-y-4">
          <Button onClick={() => router.push('/game')}>
            Inizia a Giocare
          </Button>
          <Button variant="secondary" onClick={() => router.push('/')}>
            Torna alla Home
          </Button>
        </div>
      </Card>
    </PageLayout>
  );
}