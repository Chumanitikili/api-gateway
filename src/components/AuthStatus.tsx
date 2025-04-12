
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Info, RefreshCw } from 'lucide-react';

const AuthStatus = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Authentication Status</CardTitle>
        <Button variant="ghost" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-md border-border p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">JWT Authentication</div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">Active</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-xs mb-2">
                <Info className="h-3 w-3" />
                <span>JWT keys auto-rotate every 24 hours</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-muted-foreground">Key ID:</div>
                  <div className="font-mono text-xs mt-1">KID_2025041286541</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Next rotation:</div>
                  <div className="font-mono text-xs mt-1">9h 42m</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md border-border p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">Active Sessions</div>
              <div className="text-primary font-medium">724</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-secondary p-2 rounded-md text-center">
                <div className="text-muted-foreground mb-1">Web</div>
                <div className="font-medium">294</div>
              </div>
              <div className="bg-secondary p-2 rounded-md text-center">
                <div className="text-muted-foreground mb-1">Mobile</div>
                <div className="font-medium">389</div>
              </div>
              <div className="bg-secondary p-2 rounded-md text-center">
                <div className="text-muted-foreground mb-1">API</div>
                <div className="font-medium">41</div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-md border-border p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">Token Policies</div>
            </div>
            <ul className="text-xs space-y-1">
              <li className="flex items-center">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20 mr-2 w-16 justify-center">Active</Badge>
                <span>Expiration: 60 minutes</span>
              </li>
              <li className="flex items-center">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20 mr-2 w-16 justify-center">Active</Badge>
                <span>Refresh allowed: Yes</span>
              </li>
              <li className="flex items-center">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20 mr-2 w-16 justify-center">Active</Badge>
                <span>IP binding: Enabled</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthStatus;
