
import Header from './components/Header'
import './Index.css'
// import Information from './components/Information'
import Aboutme from './components/Aboutme'
import ProjectsEducation from './components/ProjectsEducation'
import Footer from './components/Footer'

function Index() {

  return (
    <>
      <Header/>
      <main className='section-main'>
        <Aboutme/>
        <ProjectsEducation/>
      </main>
      <Footer/>
      
    </>
  )
}

export default Index
