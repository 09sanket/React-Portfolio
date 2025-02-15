import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Co-Founder at Techno Skill"
            subTitle="Co-Founder at Techno Skill."
            result="Success"
            des="Technoskill Coaching Classes: Empowering beginners with industry-relevant coding, development, AI tools, and career-focused mentorship to build a future in tech!"
          />
          <ResumeCard
            title="Team Lead"
            subTitle="Frontend Team Lead."
            result="Success"
            des="As a Team Lead at Hola9, I successfully managed and led a team in the development of two key projects, ensuring timely delivery, effective collaboration, and high-quality results. I was responsible for overseeing project planning, coordinating tasks, and mentoring team members to achieve project goals while maintaining a strong focus on client satisfaction."
          />
          <ResumeCard
            title="Mentored More than 3000 Students"
            subTitle="Empowering minds, shaping futures, and guiding success."
            result="Success"
            des="As a Teaching Assistant, I supported instructors in delivering course content, assisting students with understanding complex concepts, and providing hands-on guidance in lab sessions."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Experince</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secured Third Rank in IIITDM Placement Assessment Test"
            subTitle="Recognized for Outstanding Performance in Technical Assessment"
            result="Success"
            des="Achieved third place in the highly competitive IIITDM Placement Assessment Test, showcasing strong problem-solving and technical skills. This recognition highlights my proficiency in tackling complex challenges and my ability to excel under pressure, providing a solid foundation for my career in tech."
          />

          <ResumeCard
            title="Secured 2012 Rank Out of 100,000 Students in Jobathon by Prep Insta"
            subTitle="Recognized for Excellence in National Jobathon"
            result="Success"
            des="Achieved an impressive 2012 rank out of 100,000 participants in the Jobathon organized by Prepo Insta. This accomplishment demonstrates my competitive edge and strong problem-solving skills among a large pool of candidates, further showcasing my potential for success in challenging environments."
          />

          <ResumeCard
            title="Mentored Students Selected for Coding Ninjas and CodeYoung"
            subTitle="Guided 20,000 Students to Achieve Their Coding Goals"
            result="Success"
            des="Successfully mentored over 20,000 students, helping them gain skills and prepare for placements. Many of my students were selected for top coding platforms like Coding Ninjas and CodeYoung, demonstrating my ability to guide and inspire future tech talent to reach their full potential."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
