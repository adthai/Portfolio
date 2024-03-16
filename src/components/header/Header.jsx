import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi";
import{motion} from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
const Header = () => {
  //don't forget to add font link in index.html
  const [menuOpened, setMenuOpened] = useState(false)
const headerShadow = useHeaderShadow();
  return (
  <motion.div
  initial="hidden"
  whileInView="show"
  variants={headerVariants}
  viewport={{once: false, amount: 0.25}}
  className={`paddings ${css.wrapper}`}
  style={{boxShadow: headerShadow}}
>
    <div className={`flexCenter innerWidth ${css.container}`}>
      <div clas sName={css.name}>
        Andy
      </div>

      <ul
      style={getMenuStyles(menuOpened)}
      className={`flexCenter ${css.menu}`}>
        <li><a href="">Services</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Testimonials</a></li>
        <li className={`flexCenter ${css.phone}`}>
          <p>+1 206-427-7175</p>
          <BiPhoneCall size={"40px"}/>
        </li>
      </ul>

      <div
      className={css.menuIcon}
      onClick={() => setMenuOpened((prev) => !prev)}
      >
        <BiMenuAltRight size={30}/>
      </div>

    </div>
  </motion.div>

)};

export default Header;