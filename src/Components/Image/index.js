import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Image() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={require(`../../assets/imgs/pfp.jpg`)}
          alt="professional-pic"
          className="img-thumbnail mb-3 mx-auto pfp"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
}

// const Image = () => {
//   return (
//     <motion.div
//       className="box"
//       animate={{
//         scale: [1, 1.5, 1.5, 1, 1],
//         // rotate: [0, 0, 180, 180, 0],
//         borderRadius: ["0%", "0%", "50%", "50%", "0%"],
//       }}
//       transition={{
//         duration: 2,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//         repeat: false,
//         repeatDelay: 1,
//       }}
//     >
//       <img
//         src={require(`../../assets/imgs/pfp.jpg`)}
//         alt="professional-pic"
//         className="img-thumbnail mb-3 mx-auto pfp"
//       />
//     </motion.div>
//   );
// };

export default Image;
