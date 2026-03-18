'use client';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.email({ error: 'Please enter a valid email' }),
});

//Ref: https://ui.shadcn.com/docs/forms/react-hook-form

const LoginForm = () => {
  const form = useForm({ defaultValues: { email: '' }, resolver: zodResolver(loginSchema) });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log('submitted', values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="register-form-email">Email</FieldLabel>
              <Input
                {...field}
                id="register-form-email"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                className="form-input"
                placeholder="Enter your email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
