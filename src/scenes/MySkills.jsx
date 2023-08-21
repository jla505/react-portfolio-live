import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3" //if its on larger screens
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }} //mb = margin bottom. mt = margin top
        > 
          <p className="font-playfair font-semibold text-4xl mb-5"> 
            MY <span className="text-red">SKILLS</span> 
          </p> 
          <LineGradient width="w-1/3" /> 
          <p className="mt-10 mb-7"> 
            With expertise in HTML, CSS, and JavaScript,
            I craft seamless interfaces using modern frameworks like 
            React, Bootstrap, and NextJS.
          </p>
        </motion.div> 

        <div className="mt-16 md:mt-0"> 
          {isAboveLarge ? ( // mt = 0 for larger screens. above larger screens -> div
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" /> //on smaller screens have image without border 
          )}
        </div>
      </div>

      {/* SKILLS */} 
      <div className="md:flex md:justify-between mt-16 gap-32"> 
        {/* PROBLEM-SOLVING */}
        <motion.div //above medium screens flex -> sideways horizontally flex. smaller screen vertically line them
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 }, //comes from bottom instead of left or right. 
            visible: { opacity: 1, y: 0 },
          }}
        > 
          <div className="relative h-32"> 
            <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">1</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Problem-Solving 
              </p>
            </div> 
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> 
          </div> 
          <p className="mt-5">  
            As a software engineer, I thrive on problem solving—unraveling complexity, 
            optimizing performance, and delivering user-friendly solutions. It's what 
            keeps me agile, learning, and delivering top-notch code.
          </p>
        </motion.div> 

        {/* CONTINUOUS LEARNING */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }} //staggard animations
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">2</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Continuous Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Staying updated with latest tech is crucial. Expanding skills helps 
            me adapt, solve problems, and innovate effectively, staying relevant in a changing landscape.
          </p>
        </motion.div>
        {/* ATTENTION TO DETAIL */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">3</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Attention to Detail
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In coding, design, and user experience, overlooking small elements leads 
            to bugs, security issues, and dissatisfaction. Through careful code review, 
            scenario planning, and clear communication, I create dependable software 
            meeting top standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
