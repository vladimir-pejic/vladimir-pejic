const RadiantGlow = () => {
  return (
    <div className="absolute -inset-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
      {/* Primary warm glow */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 animate-glow-pulse blur-[40px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 123, 0, 0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Magenta overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 animate-glow-smooth blur-[30px] opacity-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Electric blue accent */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 animate-glow-accent blur-[35px] opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.2) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default RadiantGlow;