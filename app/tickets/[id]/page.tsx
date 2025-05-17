import { mockTickets, mockTicketComments } from '@/lib/data';
import { TicketDetails } from '@/components/tickets/TicketDetails';
import { notFound } from 'next/navigation';

export default function TicketDetailsPage({ params }: { params: { id: string } }) {
  const ticket = mockTickets.find((t) => t.id === params.id);
  
  if (!ticket) {
    notFound();
  }
  
  const comments = mockTicketComments[params.id] || [];

  return (
    <div className="container py-10">
      <TicketDetails ticket={ticket} comments={comments} />
    </div>
  );
}