import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f0efff] dark:bg-[#050508] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
