import { Link, NavLink } from 'react-router-dom';

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
        <Link to="https://github.com/lucasribeiro97/trybetunes" className="project-card" target="_blanked">
          <img
            src="images/trybetunes.jpg"
            alt="imagem de fone ouvido e celular"
          />
          <div>
            <h2 className="project-title">TrybeTunes</h2>
            <p className="project-description">
              O TrybeTunes é um projeto que simula um reprodutor de música online.
              O usuário pode pesquisar por artistas, álbuns e músicas, ouvir
              trechos das músicas e adicionar/remover músicas de uma playlist.
            </p>
          </div>
        </Link>
        <Link to="https://github.com/lucasribeiro97/iChoveu" className="project-card" target="_blanked">
          <img
            src="images/iChoveu.png"
            alt="imagem de nuvem e chuva"
          />
          <div>
            <h2 className="project-title">iChoveu</h2>
            <p className="project-description">
              O iChoveu é um projeto de um site de previsão do tempo. O usuário
              pode pesquisar por uma cidade e ver a previsão do tempo para os
              próximos dias.
            </p>
          </div>
        </Link>
        <Link to="https://github.com/lucasribeiro97/password-manager" className="project-card" target="_blanked">
          <img
            src="images/password-manager.jpg"
            alt="imagem de tela de senha"
          />
          <div>
            <h2 className="project-title">Password Manager</h2>
            <p className="project-description">
              O Password Manager é um projeto de um gerenciador de senhas. O
              usuário pode adicionar, remover e visualizar suas senhas salvas.
            </p>
          </div>
        </Link>
        <Link to="https://github.com/lucasribeiro97/react-testing-library" className="project-card" target="_blanked">
          <img
            src="images/react-testing-library.jpg"
            alt="código de programação"
          />
          <div>
            <h2 className="project-title">React Testing Library</h2>
            <p className="project-description">
              Projeto de estudos de testes em React utilizando a biblioteca
              Testing Library.
            </p>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Portfolio;
