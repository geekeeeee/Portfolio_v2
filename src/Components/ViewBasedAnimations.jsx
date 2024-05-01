import {React, userRef} from 'react'
import { motion, AnimatePresence} from "framer-motion"

const ViewBasedAnimations = () => {
  return (
    <>
      {/* <div className="h-screen"></div> */}
      <motion.div className="h-[100vh] w-full flex justify-center bg-white"
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{duration:1}}
      > 
        <motion.div className='text-2xl text-black p-7 font-bold'
          initial={{translateX: -100, translateY:0,opacity:0}}
          whileInView={{translateX: 0, translateY:0, opacity:1}}
          transition={{duration:0.5}}>
          Hello Im Abijith
        </motion.div>
      </motion.div>
    </>
  );
}

export default ViewBasedAnimations
