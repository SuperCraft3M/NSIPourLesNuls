export interface SubCategory {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: Array<{
    code: string;
    explanations: Record<string, string>;
  }>;
  pdfUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  subCategories: SubCategory[];
}