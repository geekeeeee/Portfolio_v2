import React, { useState } from 'react'
import { motion, AnimatePresence, layout} from "framer-motion"

const BasicsOfMotion = () => {
    const [isVisible, setIsVisible]= useState(true);
  return (
    <div className="flex flex-col justify-center items-center h-auto gap-2">
       <motion.button
        onClick ={ () => setIsVisible(!isVisible)}
        className="bg-purple-700 text-white text-md border rounded-sm border-none p-1 cursor-pointer h-auto w-[60px] absolute top-40"
        
       >
            Hello
       </motion.button>

       <AnimatePresence mode="popLayout">
            {isVisible&&<motion.div
            className="w-[150px] h-[150px] bg-white rounded-md"
            initial={{
                rotate:'0deg',
                opacity:0,
                y:0,
            }}
            animate={{
                rotate:'90deg',
                opacity:[0, 0.1, 0.3, 0.7, 1],
                y:[0,50,-50,-50,0],
            }}
            exit={{
                rotate:'0deg',
                opacity:0,
                y:0,
            }}
            transition={{
                duration: 1,
                ease: 'backInOut',
                times: [0 , 0.25 ,0.5, 0.85, 1]
            }}
            >
            </motion.div>}
       </AnimatePresence>

       <br/>

    </div>
  )
}

export default BasicsOfMotion
