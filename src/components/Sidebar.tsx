
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Shield, 
  Server, 
  Users, 
  ShoppingCart, 
  Package, 
  Settings, 
  Activity,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: number | string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  const menuSections: MenuSection[] = [
    {
      title: 'Overview',
      items: [
        { icon: <BarChart3 className="h-5 w-5" />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Activity className="h-5 w-5" />, label: 'Traffic Monitor', path: '/traffic' },
        { icon: <Shield className="h-5 w-5" />, label: 'Security', path: '/security', badge: 2 },
      ]
    },
    {
      title: 'Services',
      items: [
        { icon: <Users className="h-5 w-5" />, label: 'User Service', path: '/services/users' },
        { icon: <Package className="h-5 w-5" />, label: 'Product Service', path: '/services/products' },
        { icon: <ShoppingCart className="h-5 w-5" />, label: 'Order Service', path: '/services/orders' },
      ]
    },
    {
      title: 'Settings',
      items: [
        { icon: <Server className="h-5 w-5" />, label: 'Gateway Config', path: '/config' },
        { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '/settings' },
        { icon: <HelpCircle className="h-5 w-5" />, label: 'Help & Docs', path: '/help' },
      ]
    }
  ];

  return (
    <aside className={cn(
      "h-[calc(100vh-4rem)] border-r border-border bg-card flex flex-col transition-all duration-300",
      collapsed ? "w-[70px]" : "w-[250px]"
    )}>
      <div className="p-4 flex justify-end">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="h-6 w-6"
        >
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform",
            collapsed ? "" : "rotate-180"
          )} />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto scrollbar-hidden">
        {menuSections.map((section, idx) => (
          <div key={idx} className="mb-4">
            {!collapsed && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-2">
                {section.title}
              </h3>
            )}
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link to={item.path}>
                    <Button 
                      variant={location.pathname === item.path ? "secondary" : "ghost"} 
                      className={cn(
                        "w-full justify-start mb-1",
                        collapsed ? "px-2" : "px-4",
                      )}
                    >
                      <span className="relative">
                        {item.icon}
                        {item.badge && !collapsed && (
                          <span className="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      {!collapsed && <span className="ml-3">{item.label}</span>}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border">
        <div className={cn(
          "rounded-md bg-primary/10 p-4 text-center",
          collapsed ? "p-2" : "p-4"
        )}>
          {collapsed ? (
            <span className="text-primary text-2xl font-bold">P</span>
          ) : (
            <>
              <span className="text-primary font-semibold">PRO</span>
              <div className="text-xs text-muted-foreground mt-1">Upgrade for advanced features</div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
