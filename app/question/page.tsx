'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Card from '@/components/Card';
import Title from '@/components/Title';
import Button from '@/components/Button';

export default function QuestionPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const difficulty = searchParams.get('difficulty');
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = "Domanda X";
  const answers = [
    { id: 'A', text: 'Risposta A' },
    { id: 'B', text: 'Risposta B' },
    { id: 'C', text: 'Risposta C' },
    { id: 'D', text: 'Risposta D' }
  ];

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
    setTimeout(() => {
      console.log(`Selected answer: ${answerId}`);
      // router.push('/next-question');
    }, 500);
  };

  return (
    <PageLayout>
      <Card className="relative">
        <Title>{question}</Title>

        <div className="space-y-4">
          {answers.map((answer) => (
            <Button
              key={answer.id}
              onClick={() => handleAnswerSelect(answer.id)}
              className={selectedAnswer === answer.id ? 'ring-4 ring-orange-600 scale-105' : ''}
            >
              {answer.text}
            </Button>
          ))}
        </div>
      </Card>
    </PageLayout>
  );
}