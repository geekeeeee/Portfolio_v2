import React from 'react'
import { motion} from "framer-motion"
const Gestures = () => {
  return (
    <div>
      <motion.button className="bg-purple-700 text-white text-md border rounded-sm border-none p-1 cursor-pointer h-auto w-auto absolute top-40 scale-200"
      whileHover={{
        scale:1.05
      }}
      whileTap={{
        scale:0.95
      }}
      transition={{
        duration:0.5,
        ease:'easeInOut'
      }}
      >
        Click Me
      </motion.button>
    </div>
  )
}

export default Gestures
