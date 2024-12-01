import { useEffect } from 'react';
import { Download, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CodeBlock } from '../shared/CodeBlock';
import { CourseButton } from '../shared/CourseButton';
import { SubCategory } from '../../types/course';
import ReactMarkdown from 'react-markdown';
import { pythonCourse } from '../../data/courses/python';
import { sqlCourse } from '../../data/courses/sql';
import { templateCourse } from '../../data/courses/template';

const courses = {
  python: pythonCourse,
  sql: sqlCourse,
  template: templateCourse,
};

interface CourseContentProps {
  subCategory: SubCategory;
}

export function CourseContent({ subCategory }: CourseContentProps) {
  const { categoryId, subCategoryId } = useParams<{
    categoryId: string;
    subCategoryId: string;
  }>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const category = categoryId ? courses[categoryId as keyof typeof courses] : null;
  const currentIndex = category?.subCategories.findIndex(
    (sub) => sub.id === subCategoryId
  );

  const prevSubCategory = currentIndex !== undefined && currentIndex > 0
    ? category?.subCategories[currentIndex - 1]
    : null;

  const nextSubCategory = currentIndex !== undefined && category
    ? category.subCategories[currentIndex + 1]
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-indigo max-w-none">
        {subCategory.content.map((block, index) => (
          <div key={index}>
            {block.type === 'text' && (
              <ReactMarkdown
                components={{
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="rounded-lg shadow-md my-4 max-w-full h-auto"
                    />
                  ),
                }}
              >
                {block.content}
              </ReactMarkdown>
            )}
            {block.type === 'code' && block.codeExample && (
              <CodeBlock
                code={block.codeExample.code}
                explanations={block.codeExample.explanations}
              />
            )}
            {block.type === 'button' && block.buttons && block.buttons.length === 1 && (
              <div className="my-4">
                <CourseButton button={block.buttons[0]} />
              </div>
            )}
            {block.type === 'buttonGroup' && block.buttons && (
              <div className="my-4 flex flex-wrap gap-4">
                {block.buttons.map((button, buttonIndex) => (
                  <CourseButton key={buttonIndex} button={button} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {subCategory.pdfUrl && (
        <div className="mt-8">
          <a
            href={subCategory.pdfUrl}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger la fiche récapitulative
          </a>
        </div>
      )}

      <div className="mt-12 flex justify-between items-center">
        {prevSubCategory && categoryId && (
          <Link
            to={`/${categoryId}/${prevSubCategory.id}`}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {prevSubCategory.title}
          </Link>
        )}
        {!prevSubCategory && <div />}

        {nextSubCategory && categoryId && (
          <Link
            to={`/${categoryId}/${nextSubCategory.id}`}
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            {nextSubCategory.title}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}