
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pause, Play } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type RequestType = {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  status: number;
  time: string;
  latency: number;
  user?: string;
};

const requests: RequestType[] = [
  {
    id: 'req_0012',
    method: 'GET',
    path: '/api/users/profile',
    status: 200,
    time: '12:42:15',
    latency: 45,
    user: 'john.doe@example.com'
  },
  {
    id: 'req_0011',
    method: 'POST',
    path: '/api/products/search',
    status: 200,
    time: '12:42:12',
    latency: 120,
    user: 'admin@example.com'
  },
  {
    id: 'req_0010',
    method: 'GET',
    path: '/api/products/1234',
    status: 404,
    time: '12:42:05',
    latency: 28,
    user: 'guest'
  },
  {
    id: 'req_0009',
    method: 'PUT',
    path: '/api/orders/5678/status',
    status: 200,
    time: '12:41:58',
    latency: 76,
    user: 'admin@example.com'
  },
  {
    id: 'req_0008',
    method: 'POST',
    path: '/api/users/login',
    status: 401,
    time: '12:41:52',
    latency: 110,
    user: 'unknown'
  },
  {
    id: 'req_0007',
    method: 'GET',
    path: '/api/products?category=electronics',
    status: 200,
    time: '12:41:45',
    latency: 134,
    user: 'guest'
  },
  {
    id: 'req_0006',
    method: 'DELETE',
    path: '/api/orders/1234',
    status: 403,
    time: '12:41:38',
    latency: 56,
    user: 'john.doe@example.com'
  },
];

const getMethodColor = (method: RequestType['method']) => {
  switch (method) {
    case 'GET':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'POST':
      return 'bg-success/10 text-success border-success/20';
    case 'PUT':
      return 'bg-warning/10 text-warning border-warning/20';
    case 'DELETE':
      return 'bg-destructive/10 text-destructive border-destructive/20';
    default:
      return '';
  }
};

const getStatusColor = (status: number) => {
  if (status >= 200 && status < 300) return 'text-success';
  if (status >= 300 && status < 400) return 'text-warning';
  if (status >= 400 && status < 500) return 'text-destructive';
  if (status >= 500) return 'text-destructive';
  return '';
};

const RecentRequests = () => {
  const [liveFeed, setLiveFeed] = React.useState(true);
  
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Live Request Log</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setLiveFeed(!liveFeed)}
          className="gap-1"
        >
          {liveFeed ? (
            <>
              <Pause className="h-3 w-3" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="h-3 w-3" />
              <span>Resume</span>
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[360px]">
          <div className="grid grid-cols-12 px-4 py-2 text-xs font-medium border-b border-border bg-muted/40">
            <div className="col-span-1">ID</div>
            <div className="col-span-1">Method</div>
            <div className="col-span-4">Path</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Latency</div>
            <div className="col-span-2">Time</div>
            <div className="col-span-2">User</div>
          </div>
          {requests.map((req, i) => (
            <div 
              key={i} 
              className={cn(
                "grid grid-cols-12 px-4 py-3 text-sm border-b last:border-0 border-border",
                i === 0 && liveFeed ? "bg-primary/5" : ""
              )}
            >
              <div className="col-span-1 font-mono text-xs">{req.id}</div>
              <div className="col-span-1">
                <Badge variant="outline" className={cn("text-xs", getMethodColor(req.method))}>
                  {req.method}
                </Badge>
              </div>
              <div className="col-span-4 font-mono text-xs truncate">{req.path}</div>
              <div className={cn("col-span-1", getStatusColor(req.status))}>{req.status}</div>
              <div className="col-span-1">{req.latency}ms</div>
              <div className="col-span-2 text-muted-foreground">{req.time}</div>
              <div className="col-span-2 truncate">{req.user}</div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentRequests;
