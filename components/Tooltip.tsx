import React from 'react';
import {
  Tooltip as ShadcnTooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipTrigger as ShadcnTooltipTrigger,
  TooltipProvider as ShadcnTooltipProvider,
} from './ui/tooltip';

type TooltipProps = { children: React.ReactNode; content: React.ReactNode };

const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <ShadcnTooltipProvider>
      <ShadcnTooltip>
        <ShadcnTooltipTrigger asChild>{children}</ShadcnTooltipTrigger>
        <ShadcnTooltipContent side="top">
          <p>{content}</p>
        </ShadcnTooltipContent>
      </ShadcnTooltip>
    </ShadcnTooltipProvider>
  );
};

export default Tooltip;
