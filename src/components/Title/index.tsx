import clsx from "clsx";

type Props = {
    text: string;
    size?: 'sm' | 'md' | 'lg'
}

const Title = ({ text, size='lg' }: Props) => {
  return (
    <h1 className={clsx("", {
        ['']: size === 'sm',
        ['text-whiteGray leading-[40px]']: size === 'md',
        ['text-transparent font-[500] bg-clip-text bg-gradient-to-r from-whiteGray  to-[#cdcdcd] text-[75px] mb-4']: size === 'lg'
    })}>{text}</h1>
  )
}

export default Title