/**
 * Mock data for the application
 * This will be replaced with real data from the database
 */

export interface SOP {
  id: string;
  title: string;
  description: string;
  folder: string;
  tags: string[];
  steps: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  isFavorite: boolean;
  completionRate?: number;
}

export interface Task {
  id: string;
  sopId: string;
  sopTitle: string;
  assignedTo: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'editor' | 'viewer';
  avatar: string;
  joinedAt: Date;
}

export const mockSOPs: SOP[] = [
  {
    id: '1',
    title: 'Client Onboarding Process',
    description: 'Complete workflow for onboarding new clients from contract to kickoff',
    folder: 'Sales',
    tags: ['onboarding', 'sales', 'clients'],
    steps: 12,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-20'),
    createdBy: 'John Doe',
    isFavorite: true,
    completionRate: 87,
  },
  {
    id: '2',
    title: 'Weekly Blog Post Creation',
    description: 'Step-by-step guide for creating and publishing weekly blog content',
    folder: 'Marketing',
    tags: ['content', 'blog', 'marketing'],
    steps: 8,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-18'),
    createdBy: 'Jane Smith',
    isFavorite: false,
    completionRate: 92,
  },
  {
    id: '3',
    title: 'Customer Support Ticket Resolution',
    description: 'Standard procedure for handling and resolving customer support tickets',
    folder: 'Support',
    tags: ['support', 'customer', 'tickets'],
    steps: 10,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-02-15'),
    createdBy: 'Mike Johnson',
    isFavorite: true,
    completionRate: 95,
  },
  {
    id: '4',
    title: 'Monthly Financial Reporting',
    description: 'Process for compiling and presenting monthly financial reports',
    folder: 'Finance',
    tags: ['finance', 'reporting', 'monthly'],
    steps: 15,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-02-10'),
    createdBy: 'Sarah Williams',
    isFavorite: false,
    completionRate: 78,
  },
  {
    id: '5',
    title: 'New Employee IT Setup',
    description: 'IT setup checklist for new employee workstations and accounts',
    folder: 'HR',
    tags: ['onboarding', 'IT', 'setup'],
    steps: 18,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-02-22'),
    createdBy: 'Tom Anderson',
    isFavorite: false,
    completionRate: 100,
  },
  {
    id: '6',
    title: 'Social Media Content Calendar',
    description: 'Creating and scheduling social media content for the month',
    folder: 'Marketing',
    tags: ['social media', 'content', 'planning'],
    steps: 9,
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-19'),
    createdBy: 'Jane Smith',
    isFavorite: true,
    completionRate: 85,
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    sopId: '1',
    sopTitle: 'Client Onboarding Process',
    assignedTo: 'John Doe',
    dueDate: new Date('2024-03-15'),
    status: 'in-progress',
    priority: 'high',
  },
  {
    id: '2',
    sopId: '2',
    sopTitle: 'Weekly Blog Post Creation',
    assignedTo: 'Jane Smith',
    dueDate: new Date('2024-03-10'),
    status: 'pending',
    priority: 'medium',
  },
  {
    id: '3',
    sopId: '3',
    sopTitle: 'Customer Support Ticket Resolution',
    assignedTo: 'Mike Johnson',
    dueDate: new Date('2024-03-08'),
    status: 'completed',
    priority: 'high',
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@autopilot-sop.com',
    role: 'owner',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    joinedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@autopilot-sop.com',
    role: 'editor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@autopilot-sop.com',
    role: 'editor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    joinedAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah@autopilot-sop.com',
    role: 'viewer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    joinedAt: new Date('2024-02-10'),
  },
];

