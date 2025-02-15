import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology (B.Tech)"
            subTitle="Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)
University in Bhopal, Madhya Pradesh
 (2019 - 2023)"
            result="7.3/10"
            des="I have completed my B.Tech in Electronics and Communication Engineering from 2019 to 2023."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Vivekanand Higher Secondary English Medium School Katangi (2017 - 2019)"
            result="7.0/10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Shri Arihant English Medium School Katangi(2015 - 2017)"
            result="7.7/10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Co-Founder at Techno Skill"
            subTitle="Soch Technology - (2025 - present)"
            result="Balaghat,MadhyaPradesh"
            des="Technoskill Coaching Classes: Empowering beginners with industry-relevant coding, development, AI tools, and career-focused mentorship to build a future in tech!"
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
    </motion.div>
  );
};

export default Education;
