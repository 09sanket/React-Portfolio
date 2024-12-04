import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, Soch, Times, Computer, safety, PortfolioS, Ai } from "../../assets/index";
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
          title="Soch Technology"
          des="Its focus is on delivering strategic insights, innovation, and transformative solutions to help businesses succeed."
          src={Soch}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://sochtechnology.in/"
        />
         <ProjectsCard
          title="Portfolio Website"
          des="A responsive portfolio website showcasing projects and skills."
          src={PortfolioS}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://sochtechnologycreations.netlify.app/"
        />
      <ProjectsCard
          title=" Yashrag MigrationHub In2In Immigration"
          des="focuses on providing expert migration services, here are some name suggestions"
          src={projectTwo}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://yashragroup.com/"
        />
        <ProjectsCard
          title="Times Bridge Business Consulting Firm"
          des="Its focus is on delivering strategic insights, innovation, and transformative solutions to help businesses succeed."
          src={Times}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://timebriz.com/"
        />
        <ProjectsCard
          title="Computer House Retail and service Store"
          des="An efficient tool to manage tasks and collaborate with teams in real-time."
          src={Computer}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://computerhouse.co.in/"
        />
        <ProjectsCard
          title="Safety Radius Vehicle Safety and tracking Solutions"
          des="Stay Alert with Safety Radius focuses on vehicle safety and tracking solutions, here are some name suggestions"
          src={safety}
           githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://safetyradius.it.com/"
        />
        <ProjectsCard
          title="Social Media Clone"
          des="A modern social media platform with real-time chat and posts functionality."
          src={projectOne}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://skynter-instagram-clone.onrender.com/"
        />
        <ProjectsCard
          title="Chatting App"
          des="A secure chatting application with end-to-end encryption and real-time notifications."
          src={projectThree}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://groupchat-mern.onrender.com/chats"
        />
        
       
        <ProjectsCard
          title="AI Brain Application"
          des="Explore the Possibilities of AI Chatting with BrainwaveCurve"
          src={Ai}
          githubLink="https://github.com/09sanket?tab=repositories"
          liveLink="https://jsm-brainwave.com/"
        />
        
        
      </div>
    </section>
  );
};

export default Projects;
