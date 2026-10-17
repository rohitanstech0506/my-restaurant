import { motion } from "motion/react"

const Animated = ({
  children,
  delay,
  y = 50,
  x = 0,
  b = 0, 
  scale = 1,
  className,
  ...props
}) => {
  return (
    <motion.div initial={{opacity:0, x, y, b, scale}}
    whileInView={{opacity: 1, x: 0, y: 0, b:0, scale: 1}}
    viewport={{once: true}}
    transition={{delay, type: "spring", stiffness: 320, damping: 70, mass: 1}}
    className={className}
    {...props}
    >
      {children}
    </motion.div>
  )
}

export default Animated