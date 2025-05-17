import { notFound } from 'next/navigation';
import { mockTickets, mockScheduleSlots, mockRepairQuotes } from '@/lib/data';
import { ScheduleHero } from '@/components/schedule/ScheduleHero';
import { ScheduleCalendar } from '@/components/schedule/ScheduleCalendar';

export default function SchedulePage() {
  const tickets = mockTickets.filter(t => 
    t.status === 'open' || t.status === 'in-progress'
  );
  
  if (tickets.length === 0) {
    notFound();
  }

  // Mock data for slots and quotes (in a real app, these would be fetched per ticket)
  const availableSlots = mockScheduleSlots;

  return (
    <div>
      <ScheduleHero />
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">{"Ta'mirlash Uchrashuvini Rejalashtirish"}</h1>
        <div className="grid gap-6 lg:grid-cols-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="col-span-1">
              <ScheduleCalendar 
                ticket={ticket} 
                availableSlots={availableSlots}
                repairQuote={mockRepairQuotes.find((q) => q.ticketId === ticket.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}