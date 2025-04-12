
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type RateLimitItem = {
  client: string;
  ipAddress: string;
  usagePercent: number;
  requestCount: number;
  limit: number;
  timeRemaining: string;
};

const rateLimitData: RateLimitItem[] = [
  {
    client: 'Mobile App',
    ipAddress: '192.168.1.35',
    usagePercent: 87,
    requestCount: 87,
    limit: 100,
    timeRemaining: '28m'
  },
  {
    client: 'Web Client',
    ipAddress: '192.168.1.42',
    usagePercent: 61,
    requestCount: 61,
    limit: 100,
    timeRemaining: '42m'
  },
  {
    client: 'Admin Portal',
    ipAddress: '192.168.1.15',
    usagePercent: 32,
    requestCount: 32,
    limit: 100,
    timeRemaining: '15m'
  },
  {
    client: 'External API',
    ipAddress: '203.0.113.42',
    usagePercent: 95,
    requestCount: 95,
    limit: 100,
    timeRemaining: '58m'
  }
];

const getProgressColor = (percent: number) => {
  if (percent < 60) return 'bg-success';
  if (percent < 85) return 'bg-warning';
  return 'bg-destructive';
};

const RateLimitStatus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Rate Limiting Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rateLimitData.map((item, i) => (
            <div key={i} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">{item.client}</div>
                <div className="text-xs text-muted-foreground">{item.ipAddress}</div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.requestCount} of {item.limit} requests</span>
                  <span>Resets in {item.timeRemaining}</span>
                </div>
                <Progress 
                  value={item.usagePercent} 
                  className={cn("h-2", getProgressColor(item.usagePercent))} 
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RateLimitStatus;
