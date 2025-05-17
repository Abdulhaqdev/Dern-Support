'use client';

import { useState } from 'react';
import { Ticket, TicketComment } from '@/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { TicketStatusBadge } from './TicketStatusBadge';
import { TicketPriorityBadge } from './TicketPriorityBadge';
import { formatDistanceToNow, format } from 'date-fns';
import { CalendarClock, MessageCircle, Paperclip, Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface TicketDetailsProps {
  ticket: Ticket;
  comments: TicketComment[];
}

export function TicketDetails({ ticket, comments }: TicketDetailsProps) {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send the comment to your API
      console.log('Submitting comment:', newComment);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Reset form
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canScheduleRepair = ticket.status === 'open' || ticket.status === 'in-progress';
  const createdAt = new Date(ticket.createdAt);
  const updatedAt = new Date(ticket.updatedAt);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">Ticket #{ticket.id}</h1>
            <TicketStatusBadge status={ticket.status} />
            <TicketPriorityBadge priority={ticket.priority} />
          </div>
          <h2 className="text-xl font-semibold mb-2">{ticket.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {canScheduleRepair && (
            <Button asChild variant="default">
              <Link href={`/schedule/${ticket.id}`}>
                <CalendarClock className="mr-2 h-4 w-4" />
                Schedule Repair
              </Link>
            </Button>
          )}
          <Button variant="outline">
            Print
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="border-b bg-muted/50 p-4">
              <h3 className="font-semibold">Issue Description</h3>
            </CardHeader>
            <CardContent className="p-4">
              <p className="whitespace-pre-line">{ticket.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Comments
            </h3>
            
            {comments.length > 0 ? (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {comment.userName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">{comment.userName}</div>
                          <div className="text-xs text-muted-foreground">
                            {format(new Date(comment.createdAt), 'MMM d, yyyy h:mm a')}
                          </div>
                        </div>
                        <div className="text-sm">
                          {comment.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No comments yet.
              </div>
            )}
            
            <div className="pt-4">
              <Textarea
                placeholder="Add a comment..."
                className="min-h-24 mb-2"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4 mr-2" />
                  Attach
                </Button>
                <Button 
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim() || isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="border-b bg-muted/50 p-4">
              <h3 className="font-semibold">Ticket Details</h3>
            </CardHeader>
            <CardContent className="p-4">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd><TicketStatusBadge status={ticket.status} /></dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Priority</dt>
                  <dd><TicketPriorityBadge priority={ticket.priority} /></dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Submitted</dt>
                  <dd className="font-medium">
                    {format(createdAt, 'MMM d, yyyy h:mm a')}
                    <div className="text-xs text-muted-foreground">
                      {formatDistanceToNow(createdAt, { addSuffix: true })}
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Last Updated</dt>
                  <dd className="font-medium">
                    {format(updatedAt, 'MMM d, yyyy h:mm a')}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Assigned To</dt>
                  <dd className="font-medium">
                    {ticket.assignedTo || "Not assigned yet"}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b bg-muted/50 p-4">
              <h3 className="font-semibold">Device Information</h3>
            </CardHeader>
            <CardContent className="p-4">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Device Type</dt>
                  <dd className="font-medium capitalize">{ticket.deviceType}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Device Details</dt>
                  <dd className="font-medium">{ticket.deviceInfo}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}