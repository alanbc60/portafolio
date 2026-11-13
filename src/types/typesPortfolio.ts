export type Theme = "light" | "dark";
export type Accent = "cyan" | "magenta";

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ImageSource {
  src?: string;
  alt: string;
  placeholder: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  summary: string;
  tools: string[];
  contact: ContactLink[];
  heroImage: ImageSource;
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
  image: ImageSource;
}

export interface IndexProject {
  id: string;
  num: string;
  title: string;
  tag: string;
  stack: string;
  href: string;
}

export interface EducationItem {
  id: string;
  period: string;
  title: string;
  description: string;
}

export interface Certificate {
  id: string;
  year: string;
  title: string;
  issuer: string;
}
