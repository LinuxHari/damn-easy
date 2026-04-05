import { ButtonProps as ShadcnButtonProps, Button as ShadcnButton } from '@repo/ui';
import Loader from './Loader';

type ButtonProps = ShadcnButtonProps & {
  isLoading?: boolean;
};

const Button = ({ isLoading, children, ...props }: ButtonProps) => {
  const isDisabled = props.disabled || isLoading;

  const loaderClassName = props.variant === 'outline' ? 'text-indigo-950' : 'text-white';

  return (
    <ShadcnButton {...props} disabled={isDisabled}>
      {isLoading ? <Loader className={loaderClassName} /> : children}
    </ShadcnButton>
  );
};

export default Button;
