
import Header from './components/Header'
import './Index.css'
import Information from './components/Information'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Footer from './components/Footer'

function Index() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <Information/>
        <section className='section-contenido'>
          <Aboutme/>
          <Projects/>
        </section>
      </main>
      <Footer/>
      
    </>
  )
}

export default Index
