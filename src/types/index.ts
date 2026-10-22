export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  state: "WA" | "OR" | "ID" | "MT";
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  posted: string;
  remote: boolean;
}

export interface Professional {
  id: string;
  /** Sample entries only — not real individuals */
  label: string;
  role: string;
  industry: string;
  companyExample: string;
  location: string;
  connectionTip: string;
  linkedInSearchUrl: string;
}

export type JobStateFilter = "all" | Job["state"];
