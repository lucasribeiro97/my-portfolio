import About from '../components/About/About';
import SkillsList from '../components/SkillsList/SkillsList';

function Home() {
  return (
    <div className="bg-blue-600 h-screen">
      <About />
      <SkillsList />
    </div>
  );
}

export default Home;
