function SkillsList() {
  return (
    <div className="flex flex-col px-56 py-5">
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl font-semibold py-1">O que eu faço?</h2>
        <p className="text-md font-light py-1 pb-3">
          Sou desenvolvedor Full Stack pronto para novos desafios.
          Abaixo está uma visão de geral dos meus principais conjuntos
          de habilidades técnicas e tecnologias que utilizo.
          Acesse meu currículo online e portfólio de projetos para mais detalhes.
        </p>
      </div>
      <ul className="flex">
        <li className="space-y-1">
          <img src="icons-technologies/react.svg" alt="ícone do React" />
          <h2 className="text-xl font-semibold">React</h2>
          <p>
            Testes automatizados, Componentes de classes e funcionais,
            estados, eventos e estilização de componentes, React Router, Redux,
            Context API e Hooks.
          </p>
        </li>
        <li>
          <img src="icons-technologies/node.svg" alt="ícone do Node.js" />
          <h2 className="text-xl font-semibold">Node.js</h2>
          <p>
            Express, Sequelize, Knex, JWT, testes automatizados,
            RESTful APIs, GraphQL, WebSockets e Socket.io.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SkillsList;
