const SkillBar = ({ title, value, color }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 text-center border-t-4 ${color}`}
    >
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}%</p>
    </div>
  );
};

export default SkillBar;
