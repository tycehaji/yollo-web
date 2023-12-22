type Props = {
    title: string;
    description: string;
    image: string;
    link?: string;
}

const ContactCart = ({ description, image, title, link }: Props) => {
  return (
    <div className="contact h-[200px] sm:h-[250px] p-4 flex flex-col justify-between">
          <img src={image} className="w-[70px]" alt="" />
          <div>
            <h3 className="text-[23px] font-[600] text-whiteGray opacity-90">{title}: </h3>
            <a href={link ? link : '#'} className="text-[15px] font-[400] text-whiteGray opacity-90">{description}</a>
          </div>
        </div>
  )
}

export default ContactCart