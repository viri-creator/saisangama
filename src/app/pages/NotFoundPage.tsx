import { Link } from 'react-router';
import { PageLayout } from '../components/PageLayout';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <PageLayout>
      <div className="max-w-[1150px] mx-auto px-12 py-32 text-center">
        <h1 className="font-['Poppins:Bold',sans-serif] text-[120px] text-[#00a6ff] mb-4">404</h1>
        <h2 className="font-['Poppins:SemiBold',sans-serif] text-[36px] text-[#1e1e1e] mb-4">
          Page Not Found
        </h2>
        <p className="font-['Roboto:Regular',sans-serif] text-[18px] text-gray-600 mb-12 max-w-xl mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#00a6ff] text-white px-8 py-4 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#0080cc] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </PageLayout>
  );
}
