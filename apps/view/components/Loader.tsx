import { cn } from '@repo/ui/lib/utils';
import { Loader2 } from 'lucide-react';

const Loader = ({ className = 'text-white' }) => {
  return (
    <div role="status">
      <Loader2 className={cn('h-6! w-6! animate-spin', className)} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
