import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <div>
        <h1 className="text-2xl font-semibold text-center text-white">Lucas Ribeiro</h1>
        <img
          src="profile-picture.jpeg"
          alt="Foto de perfil"
          className="profile-img"
        />
        <p className="font-light text-white m-5 text-sm text-center">
          Olá, meu nome é Lucas Ribeiro e sou uma desenvolvedor web full stack.
          Seja bem vindo(a) ao meu site pessoal!
        </p>
      </div>
      <ul className="flex flex-row space-x-3">
        <li>
          <a href="https://www.linkedin.com/in/lucasribeirocunha/" target="_blank" rel="noreferrer">
            <img src="icons/linkedin.svg" alt="logo do linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/lucasribeiro97" target="_blank" rel="noreferrer">
            <img src="icons/github.svg" alt="logo do github" />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5518996807371" target="_blank" rel="noreferrer">
            <img src="icons/whatsapp.svg" alt="logo do whatsapp" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_lucasriibeiro/" target="_blank" rel="noreferrer">
            <img src="icons/instagram.svg" alt="logo do instagram" />
          </a>
        </li>
      </ul>
      <ul className="profile-icons">
        <li>
          <NavLink to="/" className="icons">
            <img src="icons/profile.svg" alt="ícone de perfil" />
            <span className="">Sobre mim</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="icons">
            <img src="icons/portfolio.svg" alt="ícone do portfólio" />
            <span>Portfólio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="icons">
            <img src="icons/curriculo.svg" alt="ícone de currículo" />
            <span>Currículo</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="icons">
            <img src="icons/contato.svg" alt="ícone de contato" />
            <span>Contato</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
