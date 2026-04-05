import Link from '@/components/Link';
import { LOGO_URL } from '@/constants';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="h-12! flex w-full items-center justify-center">
      <Image
        src={LOGO_URL}
        width={240}
        height={96}
        alt="logo"
        priority
        placeholder="empty"
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
