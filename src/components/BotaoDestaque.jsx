export const BotaoDestaque = ({ onClick }) => {
  return (
    <div className="flex gap-6 justify-center md:justify-start mt-4 flex-wrap">
      <button
        onClick={onClick}
        className="flex flex-col items-center focus:outline-none"
      >
        <div className="w-20 h-20 rounded-full border-2 border-green-500 flex items-center justify-center text-center text-xs text-green-400 font-semibold hover:scale-105 transition">
          Estudando<br />HTML
        </div>
        <p className="text-xs mt-2 text-gray-300">HTML & CSS</p>
      </button>
    </div>
  );
};
