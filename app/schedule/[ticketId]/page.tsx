import { notFound } from 'next/navigation';
import { mockTickets, mockScheduleSlots, mockRepairQuotes } from '@/lib/data';
import { ScheduleCalendar } from '@/components/schedule/ScheduleCalendar';

export default function SchedulePage({ params }: { params: { ticketId: string } }) {
  const ticket = mockTickets.find((t) => t.id === params.ticketId);
  
  if (!ticket) {
    notFound();
  }
  
  // Find available slots
  const availableSlots = mockScheduleSlots;
  
  // Find repair quote if exists
  const repairQuote = mockRepairQuotes.find((q) => q.ticketId === params.ticketId);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Ta'mirlash Uchrashuvini Rejalashtirish</h1>
      <p className="text-muted-foreground mb-6">Ta'mirlash uchrashuvi vaqtini tanlang</p>
      
      <ScheduleCalendar 
        ticket={ticket} 
        availableSlots={availableSlots} 
        repairQuote={repairQuote} 
      />
    </div>
  );
}