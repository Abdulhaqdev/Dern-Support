import { mockTickets, mockTicketComments } from '@/lib/data';
import { TicketDetails } from '@/components/tickets/TicketDetails';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return mockTickets.map(ticket => ({
    id: ticket.id, // ✅ `[id]` bilan bir xil bo'lishi kerak
  }));
}

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
