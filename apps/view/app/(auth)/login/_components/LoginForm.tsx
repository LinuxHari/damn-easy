'use client';

import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import { Checkbox } from '@repo/ui';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui';
import { Input } from '@repo/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Info } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.email({
    error: 'Please enter a valid email',
  }),
  remember: z.enum(['on', 'off']).default('off'),
});

const LoginForm = () => {
  const form = useForm({
    defaultValues: { email: '', remember: 'off' },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log('submitted', values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="login-form-email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="login-form-email"
                    autoComplete="off"
                    className="input"
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox {...field} id="login-form-remember" className="w-4! h-4" />
                  </FormControl>
                  <FormLabel className="w-fit!" htmlFor="login-form-remember">
                    Remember me
                  </FormLabel>
                  <Tooltip content="This will keep you logged in for 30 days">
                    <Info className="w-5! h-5 text-blue-500" />
                  </Tooltip>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormItem>
          <Button type="submit" className="btn mt-5 w-full" isLoading={form.formState.isSubmitting}>
            Submit
          </Button>
        </FormItem>
      </form>
    </Form>
  );
};

export default LoginForm;
