import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
//components reusable to share across different scenes for architecture. scenes represent different features of the page
const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]" //styling the border and giving it blue colour
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" 
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */} 
      <div className="z-30 basis-2/5 mt-12 md:mt-32"> 
        {/* HEADINGS */}
        <motion.div //z indexes pushes content to above or below. motion.div for ready to use animations
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //require div 50% of div to show animation
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 }, //once div in view change opacity to 1 and position to 0
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start"> 
            Jin {""} 
            <span //above very small screen remove image 
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            > 
              Liang
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Hi, I'm Jin Liang. I'm a front-end software engineer based in Vancouver, BC. I 
            specialize in creating captivating and user-friendly web 
            interfaces. I prioritize design, collaboration, and 
            continuous learning to deliver high-quality solutions that 
            exceed expectations. Let's create exceptional web experiences 
            together! Apart from that, I also{" "}
              <a
                href="https://www.goodreads.com/user/show/164033098-jin-liang"
                rel="noreferrer"
                target="_blank"
                className="text-green underline font-medium dark:text-mustard"
              >
                read books
              </a>{" "}
              sometimes.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }} //delay, make a fluid feel animation
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink //this buttons colour slightly rounded border padding y direction 3 
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold 
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink //border radius only on the right, small. background gradiant
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5" 
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
