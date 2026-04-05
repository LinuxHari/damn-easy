import GoogleSign from '../_components/GoogleSign';
import SignSeparator from '../_components/SignSeparator';
import LoginForm from './_components/LoginForm';
import LoginFooter from './_components/LoginFooter';
import SignCard from '../_components/SignCard';

const Login = () => {
  return (
    <SignCard title="Log in to continue">
      <LoginForm />
      <SignSeparator />
      <GoogleSign />
      <LoginFooter />
    </SignCard>
  );
};

export default Login;
