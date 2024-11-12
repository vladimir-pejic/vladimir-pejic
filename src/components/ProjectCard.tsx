import RadiantGlow from './RadiantGlow';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <RadiantGlow />
      
      {/* Card content */}
      <div className="relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-[1.01]">
        {/* Your existing card content */}
      </div>
    </div>
  );
}; 