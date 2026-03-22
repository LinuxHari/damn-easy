'use client';

import Link from '@/components/Link';
import Button from '@/components/Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.email({
    error: 'Please enter a valid email',
  }),
});

const SignupForm = () => {
  const form = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log('submitted', values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="register-form-email">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="register-form-email"
                  autoComplete="off"
                  className="input"
                  placeholder="Enter your email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="text-xs leading-5">
                By signing up, I accept the{' '}
                <Link href="#" isExternalLink>
                  Terms of Service
                </Link>{' '}
                and acknowledge the{' '}
                <Link href="#" isExternalLink>
                  Privacy Policy
                </Link>
                .
              </FormDescription>
            </FormItem>
          )}
        />

        <FormItem>
          <Button type="submit" className="btn mt-2 w-full">
            Submit
          </Button>
        </FormItem>
      </form>
    </Form>
  );
};

export default SignupForm;
