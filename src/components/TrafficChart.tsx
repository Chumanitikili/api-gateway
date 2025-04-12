
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { cn } from '@/lib/utils';

// Sample data
const hourlyData = [
  { time: '00:00', requests: 120, errors: 4 },
  { time: '02:00', requests: 80, errors: 2 },
  { time: '04:00', requests: 65, errors: 1 },
  { time: '06:00', requests: 90, errors: 0 },
  { time: '08:00', requests: 240, errors: 5 },
  { time: '10:00', requests: 350, errors: 7 },
  { time: '12:00', requests: 380, errors: 9 },
  { time: '14:00', requests: 410, errors: 11 },
  { time: '16:00', requests: 380, errors: 8 },
  { time: '18:00', requests: 300, errors: 6 },
  { time: '20:00', requests: 210, errors: 4 },
  { time: '22:00', requests: 150, errors: 3 },
];

const dailyData = [
  { time: 'Mon', requests: 2200, errors: 45 },
  { time: 'Tue', requests: 2400, errors: 52 },
  { time: 'Wed', requests: 2600, errors: 58 },
  { time: 'Thu', requests: 2900, errors: 51 },
  { time: 'Fri', requests: 3100, errors: 69 },
  { time: 'Sat', requests: 1800, errors: 42 },
  { time: 'Sun', requests: 1600, errors: 38 },
];

const weeklyData = [
  { time: 'Week 1', requests: 14500, errors: 312 },
  { time: 'Week 2', requests: 16200, errors: 340 },
  { time: 'Week 3', requests: 17800, errors: 356 },
  { time: 'Week 4', requests: 18600, errors: 362 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border rounded-md shadow-md p-3">
        <p className="text-sm font-medium mb-1">{label}</p>
        <p className="text-xs text-primary">Requests: {payload[0].value}</p>
        <p className="text-xs text-destructive">Errors: {payload[1].value}</p>
        <p className="text-xs text-success mt-1">
          Success Rate: {((Number(payload[0].value) - Number(payload[1].value)) / Number(payload[0].value) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }

  return null;
};

const TrafficChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">API Traffic Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="hourly">
          <TabsList className="grid grid-cols-3 w-[240px] mb-4">
            <TabsTrigger value="hourly">Hourly</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>
          
          <div className="h-[300px]">
            <TabsContent value="hourly" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="requests" stroke="hsl(var(--primary))" activeDot={{ r: 6 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="errors" stroke="hsl(var(--destructive))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="daily" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="requests" stroke="hsl(var(--primary))" activeDot={{ r: 6 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="errors" stroke="hsl(var(--destructive))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            
            <TabsContent value="weekly" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="requests" stroke="hsl(var(--primary))" activeDot={{ r: 6 }} strokeWidth={2} />
                  <Line type="monotone" dataKey="errors" stroke="hsl(var(--destructive))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TrafficChart;
