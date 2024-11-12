import React from 'react';
import RadiantGlow from './RadiantGlow';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Laravel", "Node.js", "Python", "Java", "PostgreSQL", "MySQL", "Redis"],
      variant: "success"
    },
    {
      title: "Frontend",
      skills: ["Vue", "React", "TypeScript", "Tailwind CSS", "SCSS"],
      variant: "default"
    },
    {
      title: "DevOps",
      skills: ["CI/CD", "Azure", "Docker", "Kubernetes", "Linux", "Nginx", "Apache", "DefectDojo"],
      variant: "warning"
    },
    {
      title: "@",
      skills: ["Software Architecture", "Lead Developer", "Project Management", "Business Analysis"],
      variant: "danger"
    }
  ] as const;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="relative group isolate p-[50px] -m-[50px]"
            >
              <RadiantGlow />
              <div className="relative h-full bg-background/90 backdrop-blur-md 
                border border-foreground/10 dark:border-foreground/20
                rounded-lg p-6 transition-all duration-500 
                group-hover:translate-y-[-2px] group-hover:scale-[1.01] 
                group-hover:bg-background/80 
                group-hover:border-foreground/20 dark:group-hover:border-foreground/30
                group-hover:shadow-[0_0_2rem_-0.5rem_rgba(0,0,0,0.2)]
                dark:group-hover:shadow-[0_0_2rem_-0.5rem_rgba(255,255,255,0.2)]">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-foreground/10 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};