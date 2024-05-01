import React from 'react'
import { motion, useAnimationControls,AnimatePresence} from "framer-motion"

const AnimationControls = () => {
  const controls = useAnimationControls();
  const handleClick= () => {
    controls.start("flip");
    // controls.stop("end");

  }
  return (
    <div>
      <motion.button
        className="bg-purple-700 text-white text-md border rounded-sm border-none p-1 cursor-pointer h-auto w-[60px] absolute top-40"
        onClick={handleClick}
       >
            Flip It
       </motion.button>
       <AnimatePresence>
        <motion.div
                className="w-[150px] h-[150px] bg-white rounded-md"
                variants={{
                    initial:{
                        rotate: "0deg"
                    },
                    flip: {
                        rotate:"360deg"
                    },
                    end:{
                        rotate:"-360deg"
                    }
                }}
                initial= "initial"
                animate= {controls}
                exit= "end"
                // whileHover="flip"

            >
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default AnimationControls
