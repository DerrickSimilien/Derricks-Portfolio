import { motion } from "framer-motion"
import "./style.css"
import ScrambleText from "../ScrambleText"

const FadeList = ({ data, delay, controls, shuffle = false, className = "", disableScramble = false }) => {

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delayChildren: delay,
        staggerChildren: 0.5,
      },
    },
  }

  const liVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.6,
      transition: {
        duration: 1,
      },
    },
  }

  return (
   <motion.ul initial="hidden" animate={controls} variants={listVariants} className={`fadeList ${className}`}>

      {data.map((item, index) => (
  <motion.li key={index} variants={liVariants}>
    {disableScramble ? (
      item
    ) : (
      <ScrambleText shuffle={shuffle} delay={delay}>
        {item}
      </ScrambleText>
    )}
  </motion.li>
      ))}
    </motion.ul>
  )
}

export default FadeList
