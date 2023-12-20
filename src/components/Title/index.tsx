import clsx from "clsx";

type Props = {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Title = ({ text, size='lg', className }: Props) => {
  return (
    <h1 className={clsx(className, {
        ['']: size === 'sm',
        ['text-whiteGray leading-[40px]']: size === 'md',
        ['text-transparent font-[500] bg-clip-text bg-gradient-to-r from-whiteGray  to-[#cdcdcd] text-[75px] mb-4']: size === 'lg'
    })}>{text}</h1>
  )
}

export default Title