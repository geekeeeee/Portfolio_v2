import React from 'react'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import { SiTailwindcss } from "react-icons/si";
import {BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiLogoReact} from 'react-icons/bi';
import { IoLogoFigma } from "react-icons/io5";
const skills = [
    {id: 1, title: "HTML", component: <BiLogoHtml5  size={40} style={{margin:10}}/>},
    {id: 2, title: "CSS", component: <BiLogoCss3  size={40} style={{margin:10}}/>},
    {id: 3, title: "JS", component: <BiLogoJavascript  size={40} style={{margin:10}}/>},
    {id: 4, title: "React JS", component: <BiLogoReact  size={40} style={{margin:10}}/>},
    {id: 5, title: "Figma", component: <IoLogoFigma  size={40} style={{margin:10}}/>},
    {id: 6, title: "Tailwind CSS", component: <SiTailwindcss  size={40} style={{margin:10}}/>},
    // {id: 7, title: "Firebase", component: <BiLogoFirebase  size={40} style={{margin:10}}/>},
    // {id: 8, title: "Leetcoder", component: <SiLeetcode  size={40} style={{margin:10}}/>},
    // {id: 9, title: "Leetcoder", component: <SiLeetcode  size={40} style={{margin:10}}/>},
];
const TiltCard = (props) => {
    const {article, index}=props;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    //get springed values
    const springx= useSpring(x);
    const springy= useSpring(y);
    //mapping
    const rotateX = useTransform(springy, [-0.5,0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(springx , [-0.5,0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove= (e) => { 
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height =rect.height;

        const mouseX= e.clientX - rect.left;
        const mouseY =e.clientY - rect.top;

        const Xperc= mouseX/width -0.5;
        const Yperc= mouseY/height -0.5;
        
        x.set(Xperc);
        y.set(Yperc);
    }
    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    }
    return (
        <motion.div  
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style= {{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="bg-green-400 text-white text-md rounded-md m-2 p-5 h-[250px] w-[200px] flex flex-col items-center justify-center " 

            key={article.id}

            initial={{opacity:0, translateX: -50 }}

            whileInView={{opacity: 1, translateX: 0}}
            transition= {{duration : 0.3 , delay: index*0.1}}
        >    
            <div style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
            }}
            className="absolute inset-3 flex flex-col rounded-xl bg-gray-800 shadow-2xl text-white justify-center items-center"
            >
                {article.component}
                <h2 className='font-thin'>{article.title}</h2>
            </div>
        </motion.div>
    );
}


const SkillsStaggered = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((article, i) => (
              <TiltCard article={article} index={i}/>
          ))}
        </div>
    )
}

export default SkillsStaggered
