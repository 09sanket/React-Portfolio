import React from "react";
import { FaCode } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { SiProgress} from "react-icons/si";
import { RiPencilRulerLine } from "react-icons/ri";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Website Development"
          des="Crafting responsive, dynamic, and user-friendly websites tailored to your needs."
          icon={<FaCode />}
        />
        <Card
          title="App Development"
          des="Building seamless, high-performance mobile and web applications for modern users."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Enhancing your online visibility with cutting-edge SEO strategies and tools."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Delivering smooth, feature-rich mobile experiences across Android and iOS platforms."
          icon={<FaMobile />}
        />
        <Card
          title="Graphics Design"
          des="Designing visually stunning graphics that communicate your brand's essence."
          icon={<RiPencilRulerLine />}
        />
        <Card
          title="Thumbnail Design"
          des="Creating eye-catching thumbnails to boost your content's engagement and reach."
          icon={<MdPhotoSizeSelectLarge />}
        />
      </div>
    </section>
  );
};

export default Features;
