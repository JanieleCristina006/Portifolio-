import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#0f0f0f] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <FaSpinner className="text-green-400 text-4xl animate-spin" />
        <p className="text-white text-lg">Carregando portfólio...</p>
      </div>
    </div>
  );
};
