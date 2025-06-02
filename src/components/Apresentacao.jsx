export const Apresentacao = () => {
  return (
    <div className="text-center md:text-left space-y-4">
      <p className="text-lg md:text-xl text-gray-400">
        Olá, eu sou a <span className="text-green-400">Janiele Cristina</span>
      </p>

      <h1 className="text-2xl md:text-2xl font-bold leading-tight">
        <span className="bg-green-400 text-black px-2 py-1 rounded-md inline-block">
          Desenvolvedora Front-End
        </span>
      </h1>

      <p className="text-gray-400 max-w-2xl text-sm md:text-base">
        Apaixonada por tecnologia e interfaces modernas, estou sempre aprimorando minhas habilidades com
        <strong> HTML, CSS, JavaScript, React e boas práticas de UI/UX</strong>.
        Busco entregar experiências mais intuitivas, funcionais e acessíveis ao usuário.
      </p>
    </div>
  );
};
