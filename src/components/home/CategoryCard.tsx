import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function CategoryCard({ title, description, icon: Icon, href }: CategoryCardProps) {
  return (
    <Link
      to={href}
      className="block p-8 glass-card rounded-xl hover-card"
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-xl">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}