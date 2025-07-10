// components/SkillBar.jsx
const SkillBar = ({ title, value }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm text-white">{title}</span>
        <span className="text-sm text-white/70">{value}%</span>
      </div>
      <div className="relative w-full h-3 bg-white/20 rounded-full">
        <div
          className="h-3 bg-teal-400 rounded-full relative transition-all duration-500"
          style={{ width: `${value}%` }}
        >
          <div className="absolute -top-[6px] -right-2 w-6 h-6 rounded-full bg-teal-400 border-2 border-white text-[10px] font-bold flex items-center justify-center">
            {value}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
