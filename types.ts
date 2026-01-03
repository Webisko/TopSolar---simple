export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Project {
  id: number;
  location: string;
  size: string;
  image: string;
  savings: string;
}

export interface NavItem {
  label: string;
  path: string;
}