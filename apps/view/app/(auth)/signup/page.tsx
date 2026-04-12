import { GoogleSign } from '../_components/GoogleSign';
import { SignSeparator } from '../_components/SignSeparator';
import { SignupForm } from './_components/SignupForm';
import { SignupFooter } from './_components/SignupFooter';
import { SignCard } from '../_components/SignCard';

const Signup = () => {
  return (
    <SignCard title="Signup to continue">
      <SignupForm />
      <SignSeparator />
      <GoogleSign />
      <SignupFooter />
    </SignCard>
  );
};

export default Signup;
