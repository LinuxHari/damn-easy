import Logo from '@/components/Logo';
import { Card, CardContent, CardHeader } from '@repo/ui';
import React from 'react';

type SignCardProps = {
  children: React.ReactNode;
  title?: string;
};

export const SignCard = ({ children, title }: SignCardProps) => {
  return (
    <main className="page-content-center bg-white">
      <Card className="sign-form form-shadow">
        <CardHeader className="mb-4 w-full gap-0 px-0">
          <div className="mb-8">
            <Logo />
          </div>
          {title && <h1 className="text-center text-lg font-semibold">{title}</h1>}
        </CardHeader>
        <CardContent className="w-full px-0">{children}</CardContent>
      </Card>
    </main>
  );
};
