export interface SalaryPrediction {
  id: string;
  education: string;
  experience: number;
  jobRole: string;
  industry: string;
  predictedSalary: number;
  userId: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  email: string;
}