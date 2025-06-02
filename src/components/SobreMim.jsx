export const SobreMim = () => {
  return (
    <section className="space-y-4 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-green-400">Sobre mim</h2>

      <p className="text-gray-300">
        Olá! Sou Janiele Cristina Fernandes, estudante de Ciência da Computação (7º período) com foco em desenvolvimento web, especialmente no ecossistema React.
        Sempre fui apaixonada por tecnologia e adoro criar interfaces modernas e funcionais.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-400">
        <li>Comecei meus estudos com HTML e CSS, e logo me apaixonei por JavaScript e React.</li>
        <li>Utilizo Git e GitHub para versionamento e colaboração em projetos.</li>
        <li>Além do código, gosto de entender design e criar experiências intuitivas.</li>
        <li>No futuro, pretendo expandir meus conhecimentos em back-end e me tornar desenvolvedora full stack.</li>
      </ul>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-white">Habilidades Técnicas</h3>
        <p className="text-sm text-gray-400">
          HTML · CSS · JavaScript · React · Styled Components · TailwindCSS · Git · GitHub
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-white">Contato</h3>
        <p className="text-sm text-gray-400">📧 janielecristina539@gmail.com</p>
        <p className="text-sm text-gray-400">🌐 github.com/JanieleCristina006</p>
      </div>
    </section>
  );
};
