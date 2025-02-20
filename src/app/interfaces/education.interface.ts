import { ContentTypeBase } from "./api.interface";

export interface Education extends ContentTypeBase {
  school: string;
  location: string;
  title: string;
  certificate: string;
  start: string;
  end: string;
  color: string;
}
