import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AnimatedBackground from './components/animatedBackground.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <div className="site">
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    )
}

export default App