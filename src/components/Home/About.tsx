function About() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold py-1">Lucas Ribeiro Cunha</h1>
      <h2 className="text-xl font-normal py-1">Desenvolvedor Full Stack Júnior</h2>
      <p className="text-md font-light py-1 pb-3">
        Atualmente estou em busca de uma oportunidade no mundo do desenvolvimento web,
        onde minha jornada me levou a dominar o front-end
        com React, HTML, CSS, JavaScript, TypeScript
        e metodologias como Redux, React Hooks e Context API.
        Além disso, estou expandindo meu conhecimento para stacks de back-end,
        como Node.js, Express, SQL e Docker.
      </p>
      <button
        className="
        text-lg
        font-semibold
        text-white
        bg-blue-400
        p-2
        mr-1
        rounded-lg
        "
      >
        Ver Portfólio
      </button>
      <button
        className="
        text-lg
        font-semibold
        text-white
        bg-gray-600
        p-2
        rounded-lg
        "
      >
        Ver Currículo
      </button>
      <img
        src="src/images/profile-picture.jpeg"
        alt="imagem de perfil"
        className="py-1"
      />
    </div>
  );
}

export default About;
