const SkillBar = ({ title, value, color = "text-white" }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={`${color} transition-all duration-700`}
        />
      </svg>

      {/* Center Text */}
      <div className="-mt-[80px] text-white font-bold text-lg">{value}%</div>
      <p className="text-sm text-white/90 text-center">{title}</p>
    </div>
  );
};

export default SkillBar;
