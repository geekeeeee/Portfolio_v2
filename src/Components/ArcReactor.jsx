import React from 'react'
import {motion} from 'framer-motion'
import "./ArcReactor.css"
const ArcReactor = () => {
  const white="#4ADE80";
  return (
    <div className="arcReactor">
      <svg width="2866" height="2040" viewBox="0 0 2866 2040" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_1_2)">
        <motion.circle cx="1433.06" cy="1019.46" r="728.841" stroke="#4ADE80"  stroke-width="27.7014" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="1.26 10.05 1.26 10.05"
          
        />
        </g>
        {/* inner long lines */}
        <g filter="url(#filter1_i_1_2)">
        <motion.circle cx="1433.06" cy="1019.46" r="317.988" stroke="#4ADE80" stroke-width="400" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="1.3 24 1.3 24"
        intial={{
            rotate: '0deg'
          }}
          animate={{
              rotate:'360deg'
          }}
          transition={{
            type:"tween",
            ease:"linear",
            duration: 20,
            repeat: Infinity
          }}
        />
        </g>

        <g filter="url(#filter2_i_1_2)">
          <motion.circle cx="1433.06" cy="1019.46" r="831.554" stroke="#4ADE80" stroke-width="5.02689" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="2.51 10.05 2.51 10.05"
            
          />
        </g>
        
        
        <g filter="url(#filter3_dd_1_2)">
        <ellipse cx="1432.36" cy="1019.46" rx="230.049" ry="233.567" fill={white} fill-opacity="0.4"/>
        <path d="M1661.15 1019.46C1661.15 1147.78 1558.7 1251.77 1432.36 1251.77C1306.02 1251.77 1203.57 1147.78 1203.57 1019.46C1203.57 891.143 1306.02 787.152 1432.36 787.152C1558.7 787.152 1661.15 891.143 1661.15 1019.46Z" stroke={white} stroke-width="2.51345"/>
        </g>

        <g filter="url(#filter4_i_1_2)">
        <circle cx="1433.06" cy="1019.46" r="393.968" stroke={white} stroke-width="50.2689" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="3.77 57.81 3.77 57.81"/>
        </g>

        <circle opacity="0.9" cx="1433.06" cy="1019.46" r="1006.03" stroke="#4ADE80"
         stroke-width="20.1076" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="1.26 1027.32 1.26 1027.32"/>
         
        <g filter="url(#filter5_i_1_2)">
        <circle cx="1433.06" cy="1019.46" r="610.65" stroke="url(#paint0_radial_1_2)" stroke-width="527.824" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="5.03 775.98 5.03 775.98"/>
        </g>
        
        <g filter="url(#filter6_i_1_2)">
        <circle cx="1433.03" cy="1020.03" r="1077.78" transform="rotate(-23.0802 1433.03 1020.03)" stroke="url(#paint1_radial_1_2)" stroke-width="931.597" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="2.51 1369.58 2.51 1369.58"/>
        </g>
        {/* //outer radials */}
        <g filter="url(#filter7_i_1_2)">
        <motion.circle cx="1432.36" cy="1019.25" r="1003.43" transform="rotate(-23.059 1432.36 1019.25)" stroke={white} stroke-width="27.6479" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="2.51 775.98 2.51 775.98" intial={{
              rotate: '0deg'
            }}
            animate={{
                rotate:'360deg'
            }}
            transition={{
              duration: 200,
              repeat: Infinity
            }}/>
        </g>
        {/* outer dials */}
        <g filter="url(#filter8_i_1_2)">
          <motion.circle cx="1433.06" cy="1019.46" r="728.841"  stroke="#4ADE80" stroke-width="22.621" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="9.17 96.91 9.17 96.91"
            intial={{
            rotate: '0deg'
          }}
          animate={{
              rotate:'-360deg'
          }}
          transition={{
            type:"tween",
            ease:"linear",
            duration: 200,
            repeat: Infinity
          }}
          />
        </g>
        {/* smol dials */}
        <g filter="url(#filter9_i_1_2)">
        <motion.circle cx="1433.06" cy="1019.46" r="568.44"  stroke="#4ADE80" stroke-width="12.5446" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="1.26 25.13 1.26 25.13"
          intial={{
            rotate: '0deg'
          }}
          animate={{
              rotate:'-360deg'
          }}
          transition={{
            type:"tween",
            ease:"linear",
            duration: 20,
            repeat: Infinity
          }}
        />
        </g>
        
        <circle opacity="0.2" cx="1433.06" cy="1019.46" r="627.535" transform="rotate(-180 1433.06 1019.46)" stroke="url(#paint2_angular_1_2)" stroke-width="30.1614" stroke-miterlimit="16" stroke-linejoin="round"/>
        
        <g opacity="0.2" filter="url(#filter10_i_1_2)">
        <ellipse cx="1433.3" cy="1019.16" rx="133.728" ry="133.728" transform="rotate(120 1433.3 1019.16)" stroke="url(#paint3_radial_1_2)" stroke-width="10.0466" stroke-miterlimit="16" stroke-linejoin="round"/>
        </g>

        <ellipse opacity="0.2" cx="1432.76" cy="1019.16" rx="984.92" ry="984.92" transform="rotate(-150 1432.76 1019.16)" stroke="url(#paint4_angular_1_2)" stroke-width="6.32882" stroke-miterlimit="16" stroke-linejoin="round"/>
        {/* dots */}
        <circle cx="1433.06" cy="1019.46" r="786.529" stroke="#4ADE80" stroke-width="6.28362" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.26 165.89 1.26 165.89"/>
        {/* inner dots */}
        <circle opacity="0.3" cx="1433.06" cy="1019.46" r="194.17" stroke="#4ADE80" stroke-width="5.7174" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.25 54.6 0.25 54.6"/>
        <g filter="url(#filter11_i_1_2)">

        <circle cx="1433.06" cy="1019.46" r="865.323" stroke="#4ADE80" stroke-width="15.0807" stroke-miterlimit="16" stroke-linejoin="round" stroke-dasharray="1.26 55.3 1.26 55.3"/>
        </g>
        <g filter="url(#filter12_d_1_2)">
        <circle cx="1433.06" cy="1019.46" r="75.9795" fill="url(#paint5_radial_1_2)"/>
        </g>
        <circle cx="1433.06" cy="1019.46" r="21.1054" fill="url(#paint6_radial_1_2)"/>
        
        </svg>

    </div>
  )
}

export default ArcReactor
