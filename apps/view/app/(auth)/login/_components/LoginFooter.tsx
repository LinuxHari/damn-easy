import Link from '@/components/Link';

export const LoginFooter = () => {
  return (
    <div className="mt-6 flex items-center justify-center gap-x-2">
      <Link className="text-sm" href="/forgot-password">
        Forgot password?
      </Link>
      <span className="inline-flex h-1 items-center text-teal-800">•</span>
      <Link className="text-sm" href="/signup">
        Create an account
      </Link>
    </div>
  );
};
