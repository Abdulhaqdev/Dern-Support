'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { ProfileSecurity } from '@/components/profile/ProfileSecurity';
import { ProfileNotifications } from '@/components/profile/ProfileNotifications';
import { User as UserIcon, ShieldCheck, Bell } from 'lucide-react';
import { getCurrentUser } from '@/lib/auth';
import { User, UserRole } from '@/types'

// Profil sahifasi uchun soxta foydalanuvchi
// import type { User, UserRole } from '@/types/user'; // Make sure this import exists and points to your User/UserRole types

const mockUser: User = getCurrentUser() || {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '555-123-4567',
  role: 'shaxsiy' as UserRole,
  createdAt: new Date().toISOString(),
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Hisob Sozlamalari</h1>
      
      <Tabs 
        defaultValue="profil" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="profil" className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Profil</span>
          </TabsTrigger>
          <TabsTrigger value="xavfsizlik" className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Xavfsizlik</span>
          </TabsTrigger>
          <TabsTrigger value="bildirishnomalar" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Bildirishnomalar</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profil">
          <ProfileForm user={mockUser} />
        </TabsContent>
        
        <TabsContent value="xavfsizlik">
          <ProfileSecurity />
        </TabsContent>
        
        <TabsContent value="bildirishnomalar">
          <ProfileNotifications />
        </TabsContent>
      </Tabs>
    </div>
  );
}