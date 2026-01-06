export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  posted: string;
  logo?: string;
  remote: boolean;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  description: string;
  duration: string;
  cost: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  url: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  type: "Article" | "Video" | "Course" | "Tool";
}

export interface UserPreferences {
  professions: string[];
  locations: string[];
  remoteOnly: boolean;
  salaryMin: number;
}

export interface SwipeAction {
  jobId: string;
  action: "like" | "dislike" | "super-like";
  timestamp: Date;
}
