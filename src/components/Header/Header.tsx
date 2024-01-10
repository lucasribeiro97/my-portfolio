function Header() {
  return (
    <header className="header-container">
      <div>
        <h1 className="text-2xl font-semibold text-center text-white">Lucas Ribeiro</h1>
        <img
          src="public/profile-picture.jpeg"
          alt="Foto de perfil"
          className="profile-img"
        />
        <p className="font-light text-white m-5 text-sm text-center">
          Olá, meu nome é Lucas Ribeiro e sou uma desenvolvedor web full stack.
          Seja bem vindo(a) ao meu site pessoal!
        </p>
      </div>
    </header>
  );
}

export default Header;
