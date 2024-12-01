export interface CodeExample {
  code: string;
  explanations: Record<string, string>;
}

export interface Button {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface ContentBlock {
  type: 'text' | 'code' | 'button' | 'buttonGroup';
  content: string;
  codeExample?: CodeExample;
  buttons?: Button[];
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  content: ContentBlock[];
  pdfUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  subCategories: SubCategory[];
}