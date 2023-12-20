import Map from '../../components/Map'
import Title from '../../components/Title'

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16">
        <Title text={'Habarlaşmak üçin'} />
        <div className="grid grid-cols-2 gap-6">
          <div className="contact h-[250px] flex items-center justify-around p-4">
            <ul>
              <li className="text-[25px] my-4 font-[600] text-whiteGray opacity-90">
                Telefon: <span className="text-[15px] font-[400]">+993 (61) 192228</span>
              </li>
              <li className="text-[25px] my-4 font-[600] text-whiteGray opacity-90">
                Email: <span className="text-[15px] font-[400]">nazar.se7en@gmail.com</span>
              </li>
            </ul>
            <img src="/images/contact-icon.png" className="w-[160px]" alt="" />
          </div>
          <div className="contact h-[250px] flex items-center justify-around p-4">
          <ul>
            <h3 className="text-[25px] font-[600] text-whiteGray opacity-90">Salgymyz:</h3>
              <li className="text-[21px] font-[600] text-whiteGray opacity-90">
                <span className="text-[15px] font-[400]">Jl. Tanjung Barat Selatan, Gang 100 no. 26 Jakarta Selatan</span>
              </li>
            </ul>
            <img src="/images/location.png" className="w-[220px]" alt="" />
          </div>
        </div>
        <div className="contact mt-8 flex items-center justify-between h-[600px] p-6 relative overflow-hidden">
          {/* <div className="basis-[45%]">
              <h3 className="text-whiteGray font-[600]">Contact</h3>
              <ul>
                <li className="text-[18px] font-[600] text-whiteGray">Mobile: <span className="text-[15px] font-[400]">+993 (61) 234355</span></li>
                <li className="text-[18px] font-[600] text-whiteGray">Email: <span className="text-[15px] font-[400]">nazar.se7en@gmail.com</span></li>
                <li className="text-[18px] font-[600] text-whiteGray">Office: <span className="text-[15px] font-[400]">+993 (71) 180199</span></li>
              </ul>
            </div> */}
          {/* <div className="basis-[45%] h-full"> */}
          <Map />
          {/* </div> */}
        </div>
      </section>
  )
}

export default Contact