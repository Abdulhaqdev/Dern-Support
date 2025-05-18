'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, ScheduleSlot, RepairQuote } from '@/types';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ScheduleCalendarProps {
  ticket: Ticket;
  availableSlots: ScheduleSlot[];
  repairQuote?: RepairQuote;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30'
];

export function ScheduleCalendar({ ticket, availableSlots, repairQuote }: ScheduleCalendarProps) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [deliveryOption, setDeliveryOption] = useState('office');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!date || !time) {
      toast.error('Iltimos, sana va vaqtni tanlang');
      return;
    }

    if (deliveryOption === 'courier' && !address.trim()) {
      toast.error('Iltimos, manzilni kiriting');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Uchrashuv muvaffaqiyatli rejalashtirildi!');
      router.push('/tickets');
    } catch (error) {
      toast.error('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
    } finally {
      setLoading(false);
    }
  };

  // Use repairQuote if available, otherwise fallback to default estimated cost
  const estimatedCost: { parts: number; labor: number; total: number } = repairQuote as any || {
    parts: 150000,
    labor: 100000,
    total: 250000
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Chipta #{ticket.id}</CardTitle>
        <p className="text-sm text-muted-foreground">{ticket.title}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Sana tanlang</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today;
            }}
            className="border rounded-md"
          />
        </div>

        <div>
          <h3 className="font-medium mb-2">Vaqt tanlang</h3>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Vaqtni tanlang" />
            </SelectTrigger>
            <SelectContent>
              {availableSlots.length > 0 ? (
                availableSlots.map((slot) => (
                  <SelectItem key={slot.startTime} value={slot.startTime}>
                    {slot.startTime}
                  </SelectItem>
                ))
              ) : (
                timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="font-medium mb-2">Yetkazib berish usuli</h3>
          <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="office" id="office" />
              <Label htmlFor="office">Ofisga olib kelish</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="courier" id="courier" />
              <Label htmlFor="courier">Kuryer xizmati</Label>
            </div>
          </RadioGroup>
        </div>

        {deliveryOption === 'courier' && (
          <div>
            <h3 className="font-medium mb-2">Manzil</h3>
            <Textarea
              placeholder="To'liq manzilni kiriting"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}

        <div className="border rounded-md p-4 bg-muted/50">
          <h3 className="font-medium mb-2">{"Ta'mirlash narxi"}</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Ehtiyot qismlar:</span>
              <span>{estimatedCost.parts} {"so'm"}</span>
            </div>
            <div className="flex justify-between">
              <span>Ish haqi:</span>
              <span>{estimatedCost.labor}{" so'm"}</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t mt-2">
              <span>Jami:</span>
              <span>{estimatedCost.total} {"so'm"}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={loading || !date || !time}
        >
          {loading ? 'Yuklanmoqda...' : 'Uchrashuvni tasdiqlash'}
        </Button>
      </CardFooter>
    </Card>
  );
}