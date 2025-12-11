export interface Question {
  id: string;
  category: string;
  subcategory?: string;
  text: string;
  dateStr?: string; // The date mentioned in the PDF
  tags: string[];
}

export interface GeneratedAnswer {
  text: string;
  code?: string;
  language?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type CategoryType = 'All' | 'Java' | 'C++' | 'Aptitude' | 'Algorithms' | 'Data Structures';
