import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkProps = NextLinkProps & { children: ReactNode };

const Link = ({ children, prefetch, ...props }: LinkProps) => {
  return (
    <NextLink {...props} prefetch={prefetch ?? false}>
      {children}
    </NextLink>
  );
};

export default Link;
