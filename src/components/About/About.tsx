import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/portfolio');
  };

  return (
    <div className="about-container">
      <div className="w-full flex flex-col">
        <div>
          <h1 className="text-4xl font-semibold py-1">Lucas Ribeiro Cunha</h1>
          <h2 className="text-xl font-normal py-1">Desenvolvedor Full Stack</h2>
          <p className="text-md font-light py-1 pb-3">
            Atualmente estou em busca de uma oportunidade no mundo do desenvolvimento web,
            onde minha jornada me levou a dominar o front-end
            com React, HTML, CSS, JavaScript, TypeScript
            e metodologias como Redux, React Hooks e Context API.
            Além disso, estou expandindo meu conhecimento para stacks de back-end,
            como Node.js, Express, SQL e Docker.
          </p>
        </div>
        <div className="mt-7">
          <button className="btn-blue" onClick={ handleNavigate }>
            Ver Portfólio
          </button>
          <button className="btn-gray">
            Ver Currículo
          </button>
        </div>
      </div>
      <div className="w-80 py-4">
        <img
          src="profile-picture.jpeg"
          alt="imagem de perfil"
        />
      </div>
    </div>
  );
}

export default About;
