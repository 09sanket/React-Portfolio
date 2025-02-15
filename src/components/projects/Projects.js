import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, Soch, Times, Computer, safety, Ai, Project1,
  Project2, 
  Project3, Project4, Project5, Project6, Project7, Project8, Project9, Project10,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Techno Skill"
          des="Technoskill Coaching Classes: Empowering beginners with industry-relevant coding, development, AI tools, and career-focused mentorship to build a future in tech!"
          src={Project1}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://technoskills.in/"
        />
      <ProjectsCard
          title="Soch Technology"
          des="Soch Technology: Innovating the future with cutting-edge digital solutions, software development, and tech-driven strategies. Empowering businesses with smart, scalable, and efficient technology!"
          src={Project2}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://sochtechnology.in/"
        />
         <ProjectsCard
          title="Yasragroupin2in"
          des="Providing expert migration services with seamless transitions and hassle-free processing. Your trusted partner for visas, relocations, and global opportunities!"
          src={Project3}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://in2inimmigrations.com/"
        />
      <ProjectsCard
          title=" NeetNext Guide"
          des="NeetGuide: Your ultimate companion for NEET preparation, offering expert guidance, study materials, and strategic insights to help you excel. Stay ahead with the latest updates, tips, and a structured learning path for your medical entrance journey!"
          src={Project4}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://neetnext.com/"
        />
        <ProjectsCard
          title="Yasraglobal Technology"
          des="Providing expert migration services with seamless transitions and hassle-free processing. Your trusted partner for visas, relocations, and global opportunities!"
          src={Project5}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://yashraglobaltechnologies.com/"
        />
        
        <ProjectsCard
          title="Safety Radius"
          des="Stay Alert with Safety Radius focuses on vehicle safety and tracking solutions, here are some name suggestions"
          src={Project6}
           githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://safetyradius.it.com/"
        />
        <ProjectsCard
          title=" Mount Carmel School"
          des="Empower your child's future with our school website – a hub for seamless learning, academic resources, and essential updates. Stay connected with interactive features, event highlights, and a dynamic education experience!"
          src={Project7}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://demo.smart-school.in/"
        />
        <ProjectsCard
          title="Ecommerce Website"
          des="Discover the ultimate shopping experience with our eCommerce website – offering a wide range of products, seamless navigation, and secure checkout. Shop with ease and enjoy great deals, fast delivery, and top-notch customer service!"
          src={Project8}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://demo.shopking.dev/home"
        />
        
       
        <ProjectsCard
          title="Empowerrall Gym Website"
          des="Transform your fitness journey with our gym website – your destination for expert training, workout plans, and membership access. Stay motivated with personalized programs, class schedules, and the latest fitness trends!"
          src={Project9}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://empowerrall.com/"
        />
        
        
      </div>
    </section>
  );
};

export default Projects;
