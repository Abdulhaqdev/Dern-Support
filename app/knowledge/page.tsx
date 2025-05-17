import { mockKnowledgeArticles } from '@/lib/data';
import { KnowledgeSearch } from '@/components/knowledge/KnowledgeSearch';

export default function KnowledgeBasePage() {
  return (
    <div className="container   py-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Bilimlar bazasi</h1>
        <p className="text-muted-foreground">
         {"Umumiy savollarga javob toping va muammolarni qanday hal qilishni o'rganing "}    </p>
      </div>
      
      <KnowledgeSearch articles={mockKnowledgeArticles} />
    </div>
  );
}