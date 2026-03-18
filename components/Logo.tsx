import Link from '@/components/Link';

enum LogoType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type LogoProps = {
  type?: LogoType;
};

const Logo = ({ type = LogoType.PRIMARY }: LogoProps) => {
  const logoType = {
    [LogoType.PRIMARY]: 'text-4xl font-[800] text-primary',
    [LogoType.SECONDARY]: 'text-3xl font-bold text-secondary',
  };

  return (
    <Link href="/" className={`${logoType[type]} inline-block w-full text-center`}>
      DAMN EASY
    </Link>
  );
};

export default Logo;
