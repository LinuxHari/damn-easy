import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkProps = NextLinkProps & { children: ReactNode; className: string };

const Link = ({ children, prefetch, className, ...props }: LinkProps) => {
  return (
    <NextLink {...props} prefetch={prefetch ?? false} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
