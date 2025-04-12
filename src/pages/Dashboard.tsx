
import React from 'react';
import { Activity, AlertCircle, BarChart3, Lock, Users } from 'lucide-react';
import StatCard from '@/components/StatCard';
import TrafficChart from '@/components/TrafficChart';
import ServiceStatus from '@/components/ServiceStatus';
import RateLimitStatus from '@/components/RateLimitStatus';
import AuthStatus from '@/components/AuthStatus';
import RecentRequests from '@/components/RecentRequests';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Gateway Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Requests (24h)" 
          value="24,521"
          icon={<Activity className="h-5 w-5 text-primary" />}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard 
          title="Error Rate" 
          value="2.3%"
          icon={<AlertCircle className="h-5 w-5 text-destructive" />}
          trend={{ value: 0.5, isPositive: false }}
        />
        <StatCard 
          title="Active Users" 
          value="724"
          icon={<Users className="h-5 w-5 text-primary" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard 
          title="Auth Requests" 
          value="5,842"
          icon={<Lock className="h-5 w-5 text-primary" />}
          trend={{ value: 3.1, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TrafficChart />
        <ServiceStatus />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentRequests />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RateLimitStatus />
        <AuthStatus />
      </div>
    </div>
  );
};

export default Dashboard;
