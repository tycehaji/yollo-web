import SmoothScroll from "./components/SmoothScroll";
import Title from "./components/Title";
import Contact from "./sections/Contact";

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
        <Title text={"Our sevice"} />
        <Title size={"md"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry."} />
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
          <div className="h-[250px] border-whiteGray border rounded-lg"></div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <Title text={"Handling In Out & Transportation"} />
        <Title
          text={
            "We can manage end to end Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring."
          }
          size="md"
        />
      </section>

      <Contact />
    </SmoothScroll>
  );
}

export default App;
