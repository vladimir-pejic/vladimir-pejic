import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RadiantGlow from './RadiantGlow';

const projectAsciiArt = `
   _____           _           _       
  |  __ \\         (_)         | |      
  | |__) | __ ___  _  ___  ___| |_ ___ 
  |  ___/ '__/ _ \\| |/ _ \\/ __| __|__/
  | |   | | | (_) | |  __/ (__| |_\\__ \\
  |_|   |_|  \\___/| |\\___|\\___|\\__|___/
              / |              
            |__/               
`;

const projects = [
  {
    title: "IQVIA HRS",
    description: "I've been a lead developer on one of the components for IQVIA Health Research Space - IQVIA's flagship product for clinical research. I've been involved in every aspect of the product, from business analysis and architecture to development to deployment and maintenance.",
    tags: ["React", "Vue", "Java", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "Azure"],
    url: "https://www.iqvia.com/solutions/real-world-evidence/study-design/health-research-space",
    ascii: `
    ╔═══╗
    ║   ║
    ╚═══╝`
  },
  {
    title: "MMRF",
    description: "Multiple Myeloma Research Foundation - a non-profit organization that funds research to find cures for multiple myeloma and other blood cancers, I've been involved in the development of their patient support Call Center and integration with their Study Model DB for long term research.",
    tags: ["Vue", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "Azure"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "NBA / NFL Vaccination Tracker",
    description: "Internal tool to track vaccination rates for NBA and NFL players and staff. Built to help with vaccine distribution and compliance during the COVID-19 pandemic play-off bubble.",
    tags: ["Vue", "Java", "PostgreSQL", "Docker", "Kubernetes", "GCP"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "Biogen Intuition",
    description: "A product that allowed Biogen to track and analyze clinical trial data for their Alzheimer's disease drug candidate.",
    tags: ["Vue", "Laravel", "PostgreSQL", "Docker", "Kubernetes", "GCP"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "FERN TV",
    description: "I was in charge for IPTV streaming service architecture and development, created a robust set of API endpoints for TV and mobile apps to consume.",
    tags: ["Vue", "Laravel", "NodeJS", "FFMPEG", "MySQL", "IPTV"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "Food Business Digital",
    description: "ERP / CRM for the food industry. I had a crucial role on the project and was responsible for the development of the product, infrastructure, and deployment.",
    tags: ["Vue", "Laravel", "NodeJS", "Websockets", "MySQL", "Plesk"],
    url: "https://foodbusiness.digital/en/",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "Evelin Online",
    description: "Admin backoffice for Evelin Online, IPTV service, for their servers, streams, clients and packages administration and reseller management.",
    tags: ["Vue", "Laravel", "NodeJS", "Websockets",  "FFMPEG", "MySQL", "Plesk", "Nginx"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },
  {
    title: "United Agro Alliance",
    description: "ERP solution for United Agro Alliance, cocoa trading company, with a focus on inventory management and supply chain optimization.",
    tags: ["Vue", "Laravel", "NodeJS", "Websockets",  "MySQL", "Plesk"],
    url: "#",
    ascii: `
    ┌───┐
    │   │
    └───┘`
  },

];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="relative h-full bg-background/90 backdrop-blur-sm 
    border border-foreground/10 dark:border-foreground/20
    rounded-lg p-6 transition-all duration-300 
    group-hover:translate-y-[-2px] group-hover:scale-[1.01] 
    group-hover:bg-background/80"
  >
    <div className="flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.url !== "#" && (
        <div className="flex gap-4">
          <span className="flex items-center gap-2 text-primary transition-colors">
            <ExternalLink size={16} />
            <span>External Link</span>
          </span>
        </div>
      )}
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group isolate p-[40px] -m-[40px]"
            >
              <RadiantGlow />
              {project.url !== "#" ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <ProjectCard project={project} />
                </a>
              ) : (
                <ProjectCard project={project} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};