import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Co-Founder at Soch Technology"
            subTitle="Soch Technology - (2024 - present)"
            result="Balaghat,MadhyaPradesh"
            des="As a Co-Founder at Soch Technology, I played a pivotal role in shaping the vision and growth of the company. I contributed to business strategy, product development, and client relations, ensuring the delivery of innovative technology solutions.. "
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Hola9 Classifieds - (2023 - Present)"
            result="Bangalore"
            des="As a Frontend Developer, I specialize in creating visually appealing, responsive, and user-friendly web interfaces. I work closely with design and backend teams to bring web applications to life using modern frontend technologies like HTML, CSS, JavaScript, and frameworks such as React."
          />
          <ResumeCard
            title="Teaching Assistant Mentor"
            subTitle="Coding Ninjas - (2022 - 2023)"
            result="Dehli"
            des="As a Teaching Assistant, I supported instructors in delivering course content, assisting students with understanding complex concepts, and providing hands-on guidance in lab sessions."
          />
          
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Intern Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI Intern"
            subTitle="Pantech Solutions (2020 - 2021)"
            result="Indore"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer intern"
            subTitle="Rynsoft Infotech (2021 - 2021)"
            result="Balaghat"
            des="As a Web Development Intern, I assisted in building and maintaining websites, collaborating with the development team to implement features and optimize user experience using HTML, CSS, JavaScript, and various web technologies."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2022 - 2022)"
            result="Katangi"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
