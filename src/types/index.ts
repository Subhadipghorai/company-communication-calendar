export type CommunicationMethod = {
  id: string;
  name: string;
  description: string;
  sequence: number;
  isMandatory: boolean;
};

export type Company = {
  id: string;
  name: string;
  location: string;
  linkedInProfile: string;
  emails: string[];
  phoneNumbers: string[];
  comments: string;
  communicationPeriodicity: number; // in days
};

export type Communication = {
  id: string;
  companyId: string;
  methodId: string;
  date: Date;
  notes: string;
  completed: boolean;
};

export type NotificationType = 'overdue' | 'today' | 'upcoming';