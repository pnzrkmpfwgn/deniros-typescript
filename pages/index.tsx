import { AnimatePresence, motion } from 'framer-motion'
import {useEffect, useState} from 'react';
import classes from '../styles/Home.module.css';
import AboutUsButton from '../components/buttons/about_us_button/AboutUsButton';
import MenuButton from '../components/buttons/menu_button/MenuButton';
import About from '../components/about/About';
import AboutMobile from '../components/aboutMobile/AboutMobile';
import { useMediaQuery } from '../utils/hooks';
import { IntlProvider,FormattedMessage } from "react-intl";
import {message} from '../data/langData';
import { useLanguage } from '../components/Menu/LanguageContext';
import Head from 'next/head';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
]

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 0, 0, 0, 1, 1],
    transition: { duration: 1.5, },
  },
  exit: {
    opacity: [1, 1, 1, 1, 1, 0],
    transition: { duration: 1.5, },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const language = useLanguage().value;

  const size = useMediaQuery(1024);

  useEffect(()=>{
   const myInterval= setInterval(()=>nextStep(),5000);
   function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }
    return ()=>{
      clearInterval(myInterval);
    }
  },[index])

  const handleScroll= () => {
    const element = document.getElementById('about_section');
    if (element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>
      <Head>
          <title> {language==="en" ? "Home" : "Anasayfa" } </title>
      </Head>
     <div>
     <AnimatePresence initial={false} custom={direction}>
          
          <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt='slides'
            className={classes.slides}
            key={images[index]}
            custom={direction}
          />
         <div className={classes.image_divider} />
        </AnimatePresence>
        {/* <div style={{width:'100%',height:'200px'}} ></div> */}
        
        <AnimatePresence>
          
        <div className={classes.landing}>
            <motion.h1
            initial={{translateX:700,opacity:0}}
            animate={{translateX:0,opacity:1}}
            transition={{duration:0.3,delay:3.5,type: "spring", stiffness: 100}}
            className={classes.heading} >
              <IntlProvider locale={language} messages={message[language]} >
              <FormattedMessage id="Home_Heading" defaultMessage="Default" values={{language}} ></FormattedMessage>
              </IntlProvider> 
            </motion.h1>
            <motion.div initial={{translateX:500,opacity:0}}
            animate={{translateX:0,opacity:1}}
            transition={{duration:0.3,delay:3.7,type: "spring", stiffness: 100}}
             className={classes.button_container} >
            <AboutUsButton language={language} handleScroll={handleScroll} />
            <MenuButton />
            </motion.div>
          </div>
        </AnimatePresence>
        {/* <div style={{width:'100%',height:'445px'}} ></div> */}
        <div id="about_section" >{size ? <AboutMobile language={language} /> : <About language={language} />}</div>
      </div>
    </>
  )
}
