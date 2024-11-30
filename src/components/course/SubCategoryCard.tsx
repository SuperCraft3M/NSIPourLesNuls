import React from 'react';
import { Link } from 'react-router-dom';
import { SubCategory } from '../../types/course';
import { ArrowRight } from 'lucide-react';

interface SubCategoryCardProps {
  categoryId: string;
  subCategory: SubCategory;
}

export function SubCategoryCard({ categoryId, subCategory }: SubCategoryCardProps) {
  return (
    <Link
      to={`/${categoryId}/${subCategory.id}`}
      className="block p-6 glass-card rounded-xl hover-card group"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {subCategory.title}
          </h3>
          <p className="mt-2 text-gray-600">{subCategory.description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}