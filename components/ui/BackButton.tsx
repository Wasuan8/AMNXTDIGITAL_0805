'use client';
import { ArrowLeft } from 'lucide-react';
export default function BackButton() {
  return (
    <button onClick={() => history.back()} className="btn-secondary text-base px-8 py-4">
      <ArrowLeft className="w-5 h-5" /> Go Back
    </button>
  );
}
