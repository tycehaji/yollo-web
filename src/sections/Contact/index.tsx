import { useTranslation } from "react-i18next";
import Map from "../../components/Map";
import Title from "../../components/Title";
import ContactCart from "../../components/Cart/ContactCart";
import { contactCarts } from "../../constants";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 py-8">
      <Title text={t("contact")} className="mb-4 sm:mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/*  */}
        {contactCarts.map((elem, i) => {
          return (
            <ContactCart
              key={i}
              title={t(elem.title)}
              description={elem.description}
              image={elem.image}
              link={elem.link}
            />
          );
        })}
      </div>
      <div className="contact mt-8 flex items-center justify-between h-[400px] sm:h-[500px] md:h-[600px] p-2 sm:p-4 relative overflow-hidden">
        <Map />
      </div>
    </section>
  );
};

export default Contact;
