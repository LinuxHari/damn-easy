import Button from '@/components/Button';
import { GOOGLE_LOGO_URL } from '@/constants';
import Image from 'next/image';

export const GoogleSign = () => {
  return (
    <Button variant="outline" className="btn w-full">
      <Image src={GOOGLE_LOGO_URL} width={24} height={24} alt="google-login" />
      Google
    </Button>
  );
};
