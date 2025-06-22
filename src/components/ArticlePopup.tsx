
import { useState } from 'react';
import { X, Clock, User } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  image: string;
}

interface ArticlePopupProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

const ArticlePopup = ({ article, isOpen, onClose }: ArticlePopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
          >
            <X className="h-5 w-5 text-cream-700" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
          <div className="flex items-center space-x-4 text-sm text-cream-600 mb-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h2 className="font-serif font-bold text-2xl text-sage-600 mb-4">
            {article.title}
          </h2>
          
          <div className="prose prose-cream max-w-none">
            <p className="text-cream-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePopup;
