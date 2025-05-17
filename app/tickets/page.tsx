import { mockTickets } from '@/lib/data';
import { TicketList } from '@/components/tickets/TicketList';

export default function TicketsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">My Support Tickets</h1>
      <TicketList tickets={mockTickets} />
    </div>
  );
}