import { ContentTypeBase, RichTextBlock } from "./api.interface";
import { Technology } from "./technology.interface";

export interface Project {
  id?: number;
  name: string;
  start: string;
  end: string;
  tasks: RichTextBlock[];
}

export interface Job extends ContentTypeBase {
  name: string;
  position: string;
  location: string;
  description: string;
  start: string;
  end: string;
  color: string,
  technologies: Technology[];
  printable: boolean;
  projects?: Project[];
}
