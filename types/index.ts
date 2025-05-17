// User types
export type UserRole = 'business' | 'personal';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  companyName?: string;
  companySize?: number;
  createdAt: string;
}

// Ticket types
export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';
export type DeviceType = 'laptop' | 'desktop' | 'tablet' | 'mobile' | 'other';

export interface Ticket {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  deviceType: DeviceType;
  deviceInfo: string;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  attachments?: string[];
}

export interface TicketComment {
  id: string;
  ticketId: string;
  userId: string;
  userName: string;
  userRole: 'customer' | 'technician';
  content: string;
  createdAt: string;
}

// Schedule types
export interface ScheduleSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  ticketId: string;
  userId: string;
  slotId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

// Knowledge base types
export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}

// Quote/Pricing types
export interface RepairQuote {
  id: string;
  ticketId: string;
  diagnosisFee: number;
  partsCost: number;
  laborCost: number;
  totalEstimate: number;
  validUntil: string;
  notes?: string;
  createdAt: string;
}