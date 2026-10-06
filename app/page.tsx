import Image from "next/image";
import HeroImg from "@/public/img/landing-1.jpg";
import VisionFeatureImg from "@/public/img/vision-feature.jpg";
import SoftwareFeatureImg from "@/public/img/software-feature.jpg";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import Product from "./components/Product";

const features = [
  {
    title: "Software & mobile",
    description:
      "Custom applications shaped around your workflows, customers and next steps.",
    tags: ["custom software", "mobile apps"],
    image: SoftwareFeatureImg,
  },
  {
    title: "Vision & biometrics",
    description:
      "Recognition technology for identity, access and vehicle identification.",
    tags: ["computer vision", "authentication"],
    image: VisionFeatureImg,
  },
];

export default function Home() {
  return (
    <div className="relative pt-13 md:pt-39">
      <div className="glow-ball -left-52.5 top-64 lg:top-124" />

      <section className="font-inter flex flex-col lg:flex-row items-center gap-x-6 gap-y-8">
        <div className="w-full space-y-8">
          <h2 className="text-[44px] md:text-7xl 2xl:text-[80px] leading-[108%] md:leading-tight">
            Good ideas. <span className="text-primary">Great software.</span>
          </h2>
          <p className="text-base md:text-2xl">
            We turn business challenges into intuitive websites, custom software
            and intelligent digital products.
          </p>
        </div>

        <Image
          src={HeroImg}
          alt="people having meeting conversation"
          className="max-w-85.5 md:max-w-155.25 h-82.5 md:h-149.5 rounded-[10px] object-cover"
          loading="eager"
        />
      </section>

      {/* FEATURES */}
      <section id="services" className="mt-24 lg:mt-36">
        <div className="max-w-160 mx-auto space-y-6 lg:space-y-9.25">
          <h2
            className="font-inter text-center text-[34px] md:text-[54px] leading-[130%] md:leading-[145%]"
            data-reveal
          >
            From the first idea.To the next big thing.
          </h2>
          <p
            className="font-inter mb-18 text-center text-accent text-base lg:text-xl leading-[145%]"
            data-reveal
          >
            From new ventures to established platforms, we turn ambitious ideas
            into focused products people want to use.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-x-10 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title.toLowerCase()} className="w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={`image featureing ${feature.title}`}
                className="w-full h-85 md:h-156 object-cover rounded-2xl"
                loading="eager"
              />

              <div className="mt-6 lg:mt-16.25 space-y-4 lg:space-y-8.75">
                <h3
                  className="text-[26px] lg:text-[34px] leading-[120%] text-white font-medium"
                  data-reveal
                >
                  {feature.title}
                </h3>

                <div className="space-y-3 md:space-y-3.75">
                  <p
                    className="text-base md:text-xl leading-[145%] text-light-gray"
                    data-reveal
                  >
                    {feature.description}
                  </p>
                  <span
                    className="uppercase text-xs md:text-sm font-medium text-light-gray"
                    data-reveal
                  >
                    {feature.tags.join(" • ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="glow-ball left-full lg:left-155 top-410" />

      {/* PRODUCTS */}
      <Product />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      <div className="glow-ball -left-48 lg:-left-40 top-1005 lg:top-1040" />

      {/* CONTACT */}
      <ContactUs />
    </div>
  );
}
