
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type ServiceType = {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  latency: number;
  uptime: number;
};

const services: ServiceType[] = [
  { 
    name: 'User Service',
    status: 'operational',
    latency: 45,
    uptime: 99.98
  },
  { 
    name: 'Product Service',
    status: 'operational',
    latency: 32,
    uptime: 99.99
  },
  { 
    name: 'Order Service',
    status: 'degraded',
    latency: 120,
    uptime: 99.82
  },
  { 
    name: 'Payment Service',
    status: 'outage',
    latency: 0,
    uptime: 94.56
  },
];

const getStatusBadge = (status: ServiceType['status']) => {
  switch (status) {
    case 'operational':
      return <Badge variant="outline" className="bg-success/10 text-success border-success/20">Operational</Badge>;
    case 'degraded':
      return <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">Degraded</Badge>;
    case 'outage':
      return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Outage</Badge>;
    default:
      return null;
  }
};

const getLatencyColor = (latency: number) => {
  if (latency === 0) return 'bg-destructive';
  if (latency < 50) return 'bg-success';
  if (latency < 100) return 'bg-success';
  return 'bg-warning';
};

const ServiceStatus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Microservice Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service, i) => (
            <div key={i} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{service.name}</div>
                {getStatusBadge(service.status)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Response Time</div>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={Math.min(100, service.latency / 2)} 
                      className={cn("h-2", getLatencyColor(service.latency))} 
                    />
                    <span className={cn(
                      service.status === 'outage' ? 'text-destructive' : '',
                    )}>
                      {service.status === 'outage' ? 'N/A' : `${service.latency}ms`}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="text-muted-foreground mb-1">Uptime</div>
                  <div className="flex items-center gap-2">
                    <Progress value={service.uptime} className="h-2" />
                    <span>{service.uptime}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceStatus;
