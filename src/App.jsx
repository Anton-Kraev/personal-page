import styles from './style';
//TODO: добавить экспорты в index
import {About, Feedback, Footer, Hero, Metrics, Navbar, Projects} from './components'
import Skills from "./components/Skills.jsx";
import Study from "./components/Study.jsx";

const App = () => (
  <div className={`bg-center bg-primary w-full overflow-hidden`}>
    <div className={`border-b-2 shadow-md shadow-white ${styles.paddingX} ${styles.flexCenter} -mb-12`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div id='hero' className='w-full h-full saturate-50 bg-[../src/assets/photo.jpg]'>
      <Hero/>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`container ${styles.boxWidth}`}>
        <div className={`grid grid-cols-2 xs:gap-4 md:gap-12`}>
          <About/>
          <Skills/>
          <Study/>
          <Projects/>
          <Feedback/>
        </div>
      </div>
    </div>

    <div className={`border-t-2 shadow-md shadow-white mt-10 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;