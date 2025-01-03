import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/utils';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={cn(
              'z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 shadow-md animate-in fade-in-0 zoom-in-95',
              className
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-current text-white" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}