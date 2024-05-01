import './App.css';
import { motion,useScroll, useSpring} from "framer-motion"
import SkillsStaggered from './Components/SkillsStaggered.jsx';
import {Projectreveal1, Projectreveal2} from './Components/Projectreveal.jsx';
import Hero from './Components/Hero.jsx';
import Footer from './Components/Footer.jsx';
import Useanimate from './Components/Useanimate.jsx';
import { useEffect ,useState } from 'react';
function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 50, damping: 10 });
  const [animationLoaded, setAnimationLoaded] = useState(true);
  // setLoading={setAnimationLoaded} 
  return (
    <>
    {/* {animationLoaded&&<Useanimate setLoading={setAnimationLoaded} />} */}
    {/* <Useanimate setLoading={setAnimationLoaded} /> */}
    <div className='main bg-slate-900 flex flex-col  min-h-screen w-auto items-center text-white justify-center font-mons scroll scroll-smooth scrollbar-hide'>
      <motion.div 
        className="bg-green-400 sticky top-0 w-full h-[10px] origin-center z-10 rounded-full 
        drop-shadow-md"
        style={{
          scaleX
        }}
      />
      <Hero/>
      <SkillsStaggered/>
      <div className="max-w-4xl">
        <Projectreveal1 projectName="Weather App" description="Learned what is an API and how to fetch APIs from the web" link="https://weather-app-yvhn.onrender.com/"/>
        <Projectreveal2 projectName="Notes App" description="Learned how to create a basic CRUD application using MERN stack as a part of Angela Yu's course on Web Development" link="https://icantthinkofanything.web.app/"/>
        <Projectreveal1 projectName="MovieBase App" description="Learned how it feels like to work with a team. I handled the frontend of this project along with another classmate. Was quite the learning experience. Created this as a part of our Course Curriculum" link="https://moviebase-70706.web.app/"/>
        <Projectreveal2 projectName="Turf Booking App" description="Learned how to create backend with firebase and solved a real-world problem" link="https://fir-tut-f4eff.firebaseapp.com/"/>
        
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default App;
