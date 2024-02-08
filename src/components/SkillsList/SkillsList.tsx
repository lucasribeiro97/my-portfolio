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
      <ul className="grid grid-cols-4 gap-6">
        <li className="skills-items">
          <img src="icons-technologies/react.svg" alt="ícone do React" />
          <h2 className="text-xl font-semibold">React</h2>
          <p>
            Testes automatizados, Componentes de classes e funcionais,
            estados, eventos e estilização de componentes, React Router, Redux,
            Context API e Hooks.
          </p>
        </li>
        <li className="skills-items">
          <img src="icons-technologies/tailwind-css.svg" alt="ícone do Tailwind" />
          <h2 className="text-xl font-semibold">Tailwind CSS</h2>
          <p>
            Utilização de classes, customização de temas e componentes,
            responsividade e construção de layouts.
          </p>
        </li>
        <li>
          <div className="flex space-x-2">
            <img src="icons-technologies/javascript.svg" alt="Ícone do JavaScript" />
            <img src="icons-technologies/typescript.svg" alt="Ícone do TypeScript" />
          </div>
          <h2 className="text-xl font-semibold">JavaScript e TypeScript</h2>
          <p>
            ES6+, assíncronismo, manipulação de DOM, eventos, funções,
            objetos, arrays, promises, async/await e fetch API.
            Tipagem estática, interfaces, tipos genéricos e union types.
          </p>
        </li>
        <li className="skills-items">
          <div className="flex">
            <img src="icons-technologies/html.svg" alt="Ícone do HTML" />
            <img src="icons-technologies/css.svg" alt="Ícone do CSS" />
          </div>
          <h2 className="text-xl font-semibold">HTML e CSS</h2>
          <p>
            Estruturação de páginas, semântica, formulários e SEO.
            Estilização de páginas, layouts responsivos e animações.
          </p>
        </li>
        <li className="skills-items">
          <img src="icons-technologies/node.svg" alt="ícone do Node.js" />
          <h2 className="text-xl font-semibold">Node.js</h2>
          <p>
            Express, Sequelize, Knex, JWT, testes automatizados,
            RESTful APIs, GraphQL, WebSockets e Socket.io.
          </p>
        </li>
        <li>
          <img src="icons-technologies/database.svg" alt="Ícone do banco de dados" />
          <h2 className="text-xl font-semibold">Banco de Dados</h2>
          <p>
            Modelagem de dados, SQL, NoSQL, ORM, migrations, seeds,
            relacionamentos, normalização e desnormalização.
          </p>
        </li>
        <li>
          <img src="icons-technologies/docker.svg" alt="" />
          <h2 className="text-xl font-semibold">Docker</h2>
          <p>
            Containers, imagens, volumes, redes, Docker Compose,
            Docker Swarm e Kubernetes.
          </p>
        </li>
        <li className="skills-items">
          <img src="icons-technologies/github.svg" alt="ícone do GitHub" />
          <h2 className="text-xl font-semibold">Git e Github</h2>
          <p>
            Versionamento de código, branches, commits, pull requests,
            merge, resolução de conflitos e rebase.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SkillsList;
