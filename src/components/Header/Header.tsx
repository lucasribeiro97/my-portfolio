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
      <ul className="flex flex-row">
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
          <a href="https://api.whatsapp.com/send?phone=5518996807371">
            <img src="icons/whatsapp.svg" alt="logo do whatsapp" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
