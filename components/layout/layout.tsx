import { useState,useEffect,useContext } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { IntlProvider,FormattedMessage } from "react-intl";
//import LayoutContext from "./LayoutContext";
import MenuOverlay from '../Menu/MenuOverlay';
import {message} from  '../../data/langData';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import classes from './layout.module.css';
import { LanguageContext } from "../Menu/MenuOverlay";
import LanguageProvider from "../Menu/LanguageContext";

export default function Layout({ children }) {
  const language = useContext(LanguageContext);

  const [loadingFinish,setLoadingFinish] = useState(true);
  const [locale, setLocale] = useState('en');
  const [navbarOpen,setNavbarOpen] = useState(false);
  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  useEffect(()=>{
    const timer = setTimeout(()=> setLoadingFinish(false), 2000);
    return ()=> clearTimeout(timer);
  },[]);

  return (
    <>
       <LanguageProvider>
       <AnimatePresence>
        {
          loadingFinish && <motion.div className={classes.page_loading} 
          initial={{opacity:1}} 
          animate={{opacity:1}}
          transition={{delay:0.5}}
          exit={{opacity:0}}
          >
          <motion.div
           initial={{opacity:1,scale:0}}
           animate={{scale:1}}
           exit={{translateX:500,opacity:0}}
           transition={{duration:0.3,type: "spring", stiffness: 100}}
           style={{'marginBottom':'25px'}}>
            <Image src="/images/Logos/Logo_Star.png" width={300} height={300} alt=""></Image>
            </motion.div>
            <motion.div
           initial={{opacity:1,scale:0}}
           animate={{scale:1}}
           transition={{duration:0.3,delay:0.3,type: "spring", stiffness: 100}}
           exit={{translateX:-500,opacity:0}}
           >
            <Image src="/images/Logos/Logo_Flag.png" width={300} height={300} alt=""></Image>
            </motion.div>
          </motion.div>
        }
       </AnimatePresence>
     
      <IntlProvider locale={typeof language === "string" ? language : "en"} messages={message[locale]} >
        
        <div>
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
         
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
           
            <main >
              {children}
            </main>
            <Footer footer_title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
        </div>
      </IntlProvider>
      </LanguageProvider>
 
    </>
  );
}