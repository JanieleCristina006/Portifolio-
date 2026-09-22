import { FaSpinner } from "react-icons/fa";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f9fc]">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <FaSpinner className="text-4xl text-[#7a64dc] animate-spin" />
        <p className="text-lg text-[#25222d]">Carregando portfólio...</p>
      </div>
    </div>
  );
};
