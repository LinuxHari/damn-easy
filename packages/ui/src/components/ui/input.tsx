import * as React from 'react';

import { cn } from '@repo/ui/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 w-full rounded-none border border-gray-400 px-1.5 py-2 text-sm shadow-none',
        'selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground',
        'min-w-0 bg-transparent outline-none transition-[color,box-shadow]',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus:ring-primary focus:border-primary focus:ring-1',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
