import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren, textVariant} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <a href="https://github.com/UWSocialComputing/swapify/blob/main/">
              <motion.img variants={fadeIn("up", "tween", .5, .6)} src="/logo.png" alt="project" />
            </a>
            {/* <motion.img variants={fadeIn("up", "tween", .7, .6)} src="/showCase2.png" alt="project" /> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;