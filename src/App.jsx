import styles from './style';
import {About, Contacts, Feedback, Footer, Hero, Metrics, Navbar, Projects} from './components'
import Topic from './components/Topic.jsx';
import {Feed} from '@mui/icons-material'

const App = () => (
  <div className={`bg-center bg-primary w-full overflow-hidden `}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`container ${styles.boxWidth}`}>
        {/* <Hero /> */}
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Topic
          heading='About'
          paragraph='po mapfo am pfodms fpsdm fpsdmfps sofmso dpfmsdpf mspdfmosmdp fsofdmpfo sdmp'
          icon={<Feed className='absolute rounded-full -right-3 -top-3 fill-secondary bg-primary' sx={{color: '#00f6ff', height: '38px', width: '38px'}}/>}
        />
        <About />
        <Projects />
        <Feedback />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;