import Link from 'next/link';
import { Home } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-surface-1">
      <div className="text-center max-w-lg">
        <div className="text-9xl font-display font-bold text-gradient mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/en" className="btn-primary text-base px-8 py-4">
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
