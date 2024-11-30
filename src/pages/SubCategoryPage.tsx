import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseContent } from '../components/course/CourseContent';
import { pythonCourse } from '../data/courses/python';
import { sqlCourse } from '../data/courses/sql';

const courses = {
  python: pythonCourse,
  sql: sqlCourse,
};

export function SubCategoryPage() {
  const { categoryId, subCategoryId } = useParams<{
    categoryId: string;
    subCategoryId: string;
  }>();

  const category = categoryId ? courses[categoryId as keyof typeof courses] : null;
  const subCategory = category?.subCategories.find(
    (sub) => sub.id === subCategoryId
  );

  if (!category || !subCategory) {
    return <div>Cours non trouvé</div>;
  }

  return (
    <div>
      <div className="bg-indigo-50 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">{subCategory.title}</h1>
          <p className="mt-2 text-gray-600">{subCategory.description}</p>
        </div>
      </div>
      <CourseContent subCategory={subCategory} />
    </div>
  );
}