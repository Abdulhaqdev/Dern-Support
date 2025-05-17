'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({
    message: 'Iltimos, to‘g‘ri elektron pochta manzilini kiriting.',
  }),
  password: z.string().min(1, {
    message: 'Parol kiritish shart.',
  }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const result = await login(values.email, values.password);
      
      if (result) {
        toast.success('Tizimga muvaffaqiyatli kirdingiz!');
        router.push('/');
      } else {
        toast.error('Elektron pochta yoki parol noto‘g‘ri.');
      }
    } catch (error) {
      toast.error('Nimadir xato ketdi. Iltimos, qayta urinib ko‘ring.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Xush kelibsiz</CardTitle>
        <CardDescription>
          Dern-Support hisobingizga kiring.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Elektron Pochta</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parol</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="text-sm">
              <Link 
                href="#" 
                className="text-primary hover:underline"
              >
                Parolni unutdingizmi?
              </Link>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Kirilmoqda...' : 'Kirish'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Hisobingiz yo‘qmi?{' '}
          <Link 
            href="/register" 
            className="text-primary hover:underline"
          >
            Hisob yaratish
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}