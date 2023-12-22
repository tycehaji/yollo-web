import Title from "./components/Title";
import Contact from "./sections/Contact";

import './i18n'
import Service from "./sections/Service";
import { useTranslation } from "react-i18next";
import { locales } from "./constants";
import clsx from "clsx";
import { IoTimeOutline } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { LiaHandshakeSolid } from "react-icons/lia";
import { TfiDropbox } from "react-icons/tfi";

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <section className="container mx-auto px-4">
        <nav className="py-8 flex items-center justify-between">
          {/* <h1 className="font-[700] text-[40px] text-whiteGray">YOLLO</h1> */}
          <img src="/images/logo.png" className="w-[170px]" alt="" />
          {/* <Title text={"Yollo"} /> */}
          <ul className="flex items-center font-[400] text-[18px] gap-x-6 text-whiteGray">
            {Object.keys(locales).map((locale) => {
              return (
                <li onClick={() => i18n.changeLanguage(locale)} className={clsx('cursor-pointer', {
                  ['pointer-events-none locale']: i18n.resolvedLanguage === locale
                  // @ts-ignore
                })} key={locale}>{locales[locale].title}</li>
              )
            })}
            {/* <li className="hover:text-primary">
              <a href="#services">Hyzmatlar</a>
            </li> */}
            {/* <li className="hover:text-primary">
              <a href="">Üstünlikler</a>
            </li>
            <li className="hover:text-primary">
              <a href="">Müşderiler</a>
            </li> */}
          </ul>
        </nav>
        <Title text={t('headertitle')} />
        {/* <button className="bg-transparent border-whiteGray border-2 hover:bg-[#0197f6] mt-4 text-whiteGray text-[19px] font-[500] h-[54px] w-[300px] rounded-md">Call Us</button> */}
      </section>
      
      
      {/* <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
        </div>
      </section> */}

      {/* <div className="container mx-auto px-4 pt-16">


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-12">
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border rounded-tr-lg sm:rounded-tr-none rounded-tl-lg flex flex-col justify-between">
            <IoTimeOutline color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('safetime')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border sm:rounded-tr-lg md:rounded-tr-none flex flex-col justify-between">
            <BsDoorOpen color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('getdoor')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border md:rounded-tr-lg flex flex-col justify-between">
            <LiaHandshakeSolid color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('deliverhand')} />
          </div>
          <div className="h-[200px] sm:h-[270px] p-4 sm:p-6 border-whiteGray border md:rounded-bl-lg flex flex-col justify-between">
            <TfiDropbox color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto translate-y-2" text={t('package')} />
          </div>
        </div>
      
      </div>
       */}
      <Service />
      
      
      
      {/* <section className="container mx-auto px-4 py-16">
        <Title text={"Handling In Out & Transportation"} />
        <Title size="md" text={"We can manage end to end Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring."}/>
      </section> */}
      <Contact />
    </>
  );
}

export default App;
