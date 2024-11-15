import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Technologies from "./components/Technologies";

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col justify-between">
    <Header />
    <main className="flex-grow">
      <ProjectList />
      <Technologies />
      <Experience />
    </main>
    <Footer />
  </div>
);

export default Home;
