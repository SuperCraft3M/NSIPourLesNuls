import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Button } from '../../types/course';

interface CourseButtonProps {
    button: Button;
}

export function CourseButton({ button }: CourseButtonProps) {
    const Icon = button.icon ? (LucideIcons[button.icon as keyof typeof LucideIcons] as React.ElementType) : null;

    const baseStyles = "inline-flex items-center px-4 py-2 rounded-md transition-colors";
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-purple-600 text-white hover:bg-purple-700",
        outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
    };

    const buttonClass = `${baseStyles} ${variants[button.variant || 'primary']}`;

    return (
        button.download ? <a href={button.link} className={buttonClass} download>
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {button.text}
        </a> : <Link to={button.link} className={buttonClass}>
            {Icon && <Icon className="w-5 h-5 mr-2" />}
            {button.text}
        </Link>
    );
}