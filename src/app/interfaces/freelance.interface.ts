import { ContentTypeBase, RichTextBlock } from "./api.interface";
import { Technology } from "./technology.interface";

export interface Freelance extends ContentTypeBase  {
  name: string;
  location: string;
  description: RichTextBlock[];
  start: string;
  end: string;
  color: string;
  printable: boolean;
  technologies: Technology[];
}
