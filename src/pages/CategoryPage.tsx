import React from 'react';
import { useParams } from 'react-router-dom';
import { SubCategoryCard } from '../components/course/SubCategoryCard';
import { pythonCourse } from '../data/courses/python';
import { sqlCourse } from '../data/courses/sql';

const courses = {
  python: pythonCourse,
  sql: sqlCourse,
};

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? courses[categoryId as keyof typeof courses] : null;

  if (!category) {
    return <div>Catégorie non trouvée</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{category.title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subCategories.map((subCategory) => (
          <SubCategoryCard
            key={subCategory.id}
            categoryId={category.id}
            subCategory={subCategory}
          />
        ))}
      </div>
    </div>
  );
}