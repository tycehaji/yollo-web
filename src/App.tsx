import SmoothScroll from "./components/SmoothScroll";
import Title from "./components/Title";
import Contact from "./sections/Contact";
import { AiOutlineSafety } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiDropbox } from "react-icons/tfi";
import { LiaHandshakeSolid } from "react-icons/lia";
import { BsDoorOpen } from "react-icons/bs";

function App() {
  return (
    <SmoothScroll>
      <section className="container mx-auto px-4">
        <nav className="py-8 flex items-center justify-between">
          <h1 className="font-[400] text-whiteGray">LOGO</h1>
          <ul className="flex items-center font-[400] text-[18px] gap-x-6 text-whiteGray">
            <li className="hover:text-primary">
              <a href="">Hyzmatlar</a>
            </li>
            <li className="hover:text-primary">
              <a href="">Üstünlikler</a>
            </li>
            <li className="hover:text-primary">
              <a href="">Müşderiler</a>
            </li>
          </ul>
        </nav>
        <Title text={"Hytaýdan Türkmenistana we Özbegistana enjamlar, çig mal we dürli harytlary eltip bermek hyzmaty"} />
        {/* <button className="bg-transparent border-whiteGray border-2 hover:bg-[#0197f6] mt-4 text-whiteGray text-[19px] font-[500] h-[54px] w-[300px] rounded-md">Call Us</button> */}
      </section>
      
      
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
          <div className="h-[500px] border-whiteGray border rounded-lg"></div>
        </div>
      </section>
      
      
      <section className="container mx-auto px-4 py-16">
        <Title text={"Ýokary hilli hyzmat"} />
        <Title size={"md"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry."} />
        <div className="grid grid-cols-3 mt-8">
          <div className="h-[290px] p-6 border-whiteGray border rounded-tl-lg flex flex-col justify-between">
            <BsDoorOpen color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border  flex flex-col justify-between">
            <IoTimeOutline color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-tr-lg flex flex-col justify-between">
            <LiaHandshakeSolid color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-bl-lg flex flex-col justify-between">
            <TfiDropbox color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border flex flex-col justify-between">
            <AiOutlineSafety color={'#FAFAFA'} size={40} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
          <div className="h-[290px] p-6 border-whiteGray border rounded-br-lg flex flex-col justify-between">
            <CiDeliveryTruck color={'#FAFAFA'} size={42} />
            <Title className="!text-[35px] mt-auto" text={"Wagtyňyzy tygşytlarys"} />
          </div>
        </div>
      </section>
      
      
      {/* <section className="container mx-auto px-4 py-16">
        <Title text={"Handling In Out & Transportation"} />
        <Title size="md" text={"We can manage end to end Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring."}/>
      </section> */}
      <Contact />
    </SmoothScroll>
  );
}

export default App;
