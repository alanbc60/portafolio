
import Header from './components/Header'
import './Index.css'
import Information from './components/Information'
import Aboutme from './components/Aboutme'
import ProjectsEducation from './components/ProjectsEducation'
import Footer from './components/Footer'

function Index() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className='section-main'>
        <Information/>
        <section className='section-contenido'>
          <Aboutme/>
          <ProjectsEducation/>
        </section>
      </main>
      <Footer/>
      
    </>
  )
}

export default Index
