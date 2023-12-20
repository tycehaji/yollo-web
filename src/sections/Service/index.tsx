import Title from '../../components/Title'
import { AiOutlineSafety } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiDropbox } from "react-icons/tfi";
import { LiaHandshakeSolid } from "react-icons/lia";
import { BsDoorOpen } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Service = () => {
    const { t } = useTranslation()
  return (
    <section className="container mx-auto px-4 py-16">
        <Title text={"Ýokary hilli hyzmat"} />
        <Title size={"md"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry."} />
        <div className="grid grid-cols-3 mt-8">
          <div className="h-[290px] p-6 border-whiteGray border rounded-tl-lg flex flex-col justify-between">
            <IoTimeOutline color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={t('safetime')} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border  flex flex-col justify-between">
            <BsDoorOpen color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={t('getdoor')} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-tr-lg flex flex-col justify-between">
            <LiaHandshakeSolid color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={t('deliverhand')} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-bl-lg flex flex-col justify-between">
            <TfiDropbox color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={t('package')} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border flex flex-col justify-between">
            <AiOutlineSafety color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={t('trustly')} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-br-lg flex flex-col justify-between">
            <CiDeliveryTruck color={'#FAFAFA'} size={42} />
            <Title className="!text-[35px] mt-auto" text={t('deliverdoor')} />
          </div>
        </div>
      </section>
  )
}

export default Service