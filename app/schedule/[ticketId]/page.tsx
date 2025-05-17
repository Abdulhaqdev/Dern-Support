// app/schedule/[ticketId]/page.tsx
import { notFound } from 'next/navigation';
import { mockTickets, mockRepairQuotes, mockScheduleSlots } from '@/lib/data';
import { ScheduleCalendar } from '@/components/schedule/ScheduleCalendar';

export async function generateStaticParams() {
  return mockTickets.map(ticket => ({
    ticketId: ticket.id, // ❗ fayl nomi `[ticketId]` bo‘lgani uchun `ticketId` deb yozish kerak
  }));
}

export default function SchedulePage({ params }: { params: { ticketId: string } }) {
  const ticket = mockTickets.find((t) => t.id === params.ticketId);

  if (!ticket) {
    notFound();
  }

  const availableSlots = mockScheduleSlots;
  const repairQuote = mockRepairQuotes.find((q) => q.ticketId === params.ticketId);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">{"Ta'mirlash Uchrashuvini Rejalashtirish"}</h1>
      <p className="text-muted-foreground mb-6">{"Ta'mirlash uchrashuvi vaqtini tanlang"}</p>
      <ScheduleCalendar
        ticket={ticket}
        availableSlots={availableSlots}
        repairQuote={repairQuote}
      />
    </div>
  );
}
