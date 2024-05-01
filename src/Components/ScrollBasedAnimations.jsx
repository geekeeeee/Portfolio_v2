import React from 'react'
import { motion,useScroll, useSpring} from "framer-motion"

const ScrollBasedAnimations = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, { stiffness: 50, damping: 10 });
  
  return (
    <div className="p-1 m-auto max-w-[700px]">
      <motion.div 
        className="bg-green-400 sticky top-0 w-full h-[10px] origin-left"
        style={{
            scaleX
        }}
      />
    </div>
  )
}

export default ScrollBasedAnimations
