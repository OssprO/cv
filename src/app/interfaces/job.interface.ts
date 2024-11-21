import { RichTextBlock } from "./api.interface";

export interface Project {
  id?: number;
  name: string;
  start: string;
  end: string;
  tasks: RichTextBlock[];
}

export interface Job {
  id?: number;
  documentId: string;
  name: string;
  position: string;
  location: string;
  description: string;
  start: string;
  end: string;
  color: string,
  technologies: string[];
  printable: boolean;
  projects?: Project[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale: string;
}
