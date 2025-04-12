
import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Shield className="h-8 w-8 text-primary" />
        <Lock className="absolute h-4 w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-foreground" />
      </div>
      <span className="font-bold text-lg">SecureGateway</span>
    </div>
  );
};

export default Logo;
