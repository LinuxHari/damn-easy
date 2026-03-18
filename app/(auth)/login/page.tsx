import Logo from '@/components/Logo';
import LoginForm from './components/LoginForm';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Login = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <Card className="form gap-0">
        <CardHeader className="mb-4 w-full px-0">
          <div className="mb-6">
            <Logo />
          </div>
          <h1 className="text-center text-lg font-semibold">Signup to continue</h1>
        </CardHeader>
        <CardContent className="w-full px-0">
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
