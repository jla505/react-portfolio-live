import LineGradient from "../components/LineGradient"; 
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, //animation will happen for each children with 0.2 gap inbetween
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 }, //initial item for each child
  visible: { opacity: 1, scale: 1 }, //final condition for each child
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
//IMPORTANT for css relative vs absolute when u put stuff over other things or below
  return (
    <motion.div variants={projectVariant} className="relative"> 
      <div className={overlayStyles}> 
        <p className="text-2xl font-playfair">{title}</p> 
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};
//a lot of configuration so didn't make it reusable because it would be harder to make it all configurable
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      > 
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS 
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div> 
        </div>
        <p className="mt-10 mb-10"> 
          Here are some of the projects I've worked on.
        </p>
      </motion.div> 
 
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div //only want grid system when above certain screens(above small screens). set grid column of 3 automatically. each child. 
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1. vertically and horizontally aligned. padding of 10. max width for responsive purposes */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subtitle="An Admin Dashboard built with React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."/>
          <Project title="Project 2" subtitle="A Web Chat app built with React and Firebase utilizes the powerful features of both technologies to create a real-time messaging application. By combining the power of React for building interactive user interfaces and Firebase for real-time data synchronization, authentication, and database management, ChatApp provides a seamless and responsive messaging experience for users."/>

          {/* ROW 2 */}
          <Project title="Project 3" subtitle="Cartopia is a dynamic and modern car rental website designed and developed as a personal project. Leveraging the power of React, Next.js 13, TypeScript, and Tailwind CSS, this website aims to provide users with a seamless and user-friendly experience for renting cars for their travel needs."/>
          <Project title="Project 4" subtitle="Eco Friendly Clothes is an online clothing store. Leveraging the power of React this website aims to provide users with a user-friendly experience that combines visually appealing design, user-friendly navigation, and informative content to create an engaging and effective platform for selling products or services online."/>
          <Project title="Project 5" subtitle="Todo list app created with HTML, CSS and JavaScript."/>

          {/* ROW 3 */}
          <Project title="Project 6" subtitle="Library created with HTML, CSS, and JavaScript."/>
          <Project title="Project 7" subtitle="CV project created with HTML, CSS, JavaScript, and SCSS."/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
