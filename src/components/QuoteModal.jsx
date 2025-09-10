import React from 'react';
import GetQuoteForm from './GetQuoteForm';

export default function QuoteModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#02294D] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <GetQuoteForm />
      </div>
    </div>
  );
}
