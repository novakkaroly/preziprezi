
export interface Section {
  title: string;
  content: ContentItem[];
}

export type ContentItem = 
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'tips'; items: Tip[] }
  | { type: 'mistakesTable'; items: Mistake[] }
  | { type: 'quote'; text: string; author?: string };

export interface Tip {
  icon: 'question' | 'story' | 'quote' | 'audience' | 'rhythm' | 'narrate' | 'posture' | 'eye' | 'gesture' | 'smile' | 'summary' | 'callback' | 'callToAction' | 'thought' | 'breathe' | 'positive' | 'visualize' | 'shake';
  title: string;
  description: string;
}

export interface Mistake {
  badTitle: string;
  badReason: string;
  goodTitle: string;
  goodReason: string;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  sections: Section[];
}

export interface ChecklistCategory {
  title: string;
  items: string[];
}
