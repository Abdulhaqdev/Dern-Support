import { TicketForm } from '@/components/tickets/TicketForm';

export default function NewTicketPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Support Ticket</h1>
      <TicketForm />
    </div>
  );
}