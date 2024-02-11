import { NavLink } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="w-full h-screen">
      <header className="header-portfolio">
        <h1 className="text-3xl font-semibold">Portfólio</h1>
        <p className="m-5 text-l text-center">
          Boas vindas ao meu portfólio pessoal! Aqui você encontrará alguns dos
          meus projetos mais recentes.
        </p>
      </header>
      <ul className="stacks-list">
        <li className="stacks-item">
          <NavLink to="/portfolio">
            Todos
          </NavLink>
        </li>
        <li className="stacks-item">
          <NavLink to="/portfolio">
            Front-end
          </NavLink>
        </li>
        <li className="stacks-item">
          <NavLink to="/portfolio">
            Back-end
          </NavLink>
        </li>
      </ul>
      <ul className="project-list">
        <li className="project-card">
          <img
            src="images/trybetunes.jpg"
            alt="projeto 1"
          />
          <div>
            <h2 className="project-title">TrybeTunes</h2>
            <p className="project-description">
              O TrybeTunes é um projeto que simula um reprodutor de música online.
              O usuário pode pesquisar por artistas, álbuns e músicas, ouvir
              trechos das músicas e adicionar/remover músicas de uma playlist.
            </p>
          </div>
        </li>
        <li className="project-card">
          <img
            src="project-2.png"
            alt="projeto 2"
          />
          <div>
            <h2 className="project-title">Projeto 2</h2>
            <p className="project-description">
              Descrição do projeto 2
            </p>
          </div>
        </li>
        <li className="project-card">
          <img
            src="project-3.png"
            alt="projeto 3"
          />
          <div>
            <h2 className="project-title">Projeto 3</h2>
            <p className="project-description">
              Descrição do projeto 3
            </p>
          </div>
        </li>
        <li className="project-card">
          <img
            src="project-3.png"
            alt="projeto 3"
          />
          <div>
            <h2 className="project-title">Projeto 3</h2>
            <p className="project-description">
              Descrição do projeto 3
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
