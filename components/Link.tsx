import { cn } from '@/lib/utils';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
  isExternalLink?: boolean;
};

const Link = ({
  children,
  prefetch,
  className = '',
  isExternalLink = false,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      {...props}
      prefetch={prefetch ?? false}
      target={isExternalLink ? '_blank' : undefined}
      className={cn('text-primary inline-flex items-center underline hover:underline', className)}
    >
      {children}
      {isExternalLink && <ExternalLink className="ml-1 h-3 w-3" />}
    </NextLink>
  );
};

export default Link;
