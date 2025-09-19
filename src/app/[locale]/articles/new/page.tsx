import { ArticleForm } from '@/components/ArticleForm/ArticleForm';
import { ArticleHeader } from '@/components/ArticleForm/ArticleHeader';

export default function NewArticle() {
  return (
    <div className=' bg-gray-50 '>
      {/* Article Header */}
      <ArticleHeader />
      {/* Article Form */}
      <ArticleForm />
    </div>
  );
}
