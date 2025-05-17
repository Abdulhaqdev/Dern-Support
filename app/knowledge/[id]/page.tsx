import { notFound } from 'next/navigation';
import { mockKnowledgeArticles } from '@/lib/data';
import { KnowledgeArticleView } from '@/components/knowledge/KnowledgeArticleView';

// generateStaticParams funksiyasini qo‘shish
export async function generateStaticParams() {
  return mockKnowledgeArticles.map((article) => ({
    id: article.id, // Har bir maqola uchun id qaytariladi
  }));
}

export default function KnowledgeArticlePage({ params }: { params: { id: string } }) {
  const article = mockKnowledgeArticles.find((a) => a.id === params.id);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <KnowledgeArticleView article={article} />
      </div>
    </div>
  );
}