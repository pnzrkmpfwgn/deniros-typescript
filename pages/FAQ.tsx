import classes from '../styles/FAQ.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { IntlProvider,FormattedMessage } from "react-intl";
import {message} from '../data/langData';
import { useLanguage } from '../components/Menu/LanguageContext';
import { LanguageContext } from '../components/Menu/MenuOverlay';
import Head from 'next/head';

const FAQ = ()=>{
    const language = useLanguage().value;
    return <>
        <Head>
          <title> {language==="en" ? "FAQ" : "SSS" } </title>
      </Head>
        <IntlProvider locale={language} messages={message[language]}>
        <AnimatePresence>
        <div className={classes.heading_container} >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={classes.bg} src="/images/8.jpg" alt="" />
            <h3 className={classes.heading} > <FormattedMessage id="faq" values={{language}} defaultMessage="Default" /> </h3>
        </div>
        <div className={classes.container}>
        <motion.div 
            className={classes.question_container}
            initial={{opacity:0,translateY:-100,skewX:0}}
            whileInView={{opacity:1,translateY:0,skewX:-20}}
            transition={{duration:0.6,delay:1,type: "spring", stiffness: 30}}
            viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_question" values={{language}} defaultMessage="Default" /> </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:1,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_answer" values={{language}} defaultMessage="Default" /> </h4>
                <p><FormattedMessage id="faq_answer_1" values={{language}} defaultMessage="Default" /> </p>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.question_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_question" values={{language}} defaultMessage="Default" /> </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,delay:2.5,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_answer" values={{language}} defaultMessage="Default" /> </h4>
                <p><FormattedMessage id="faq_answer_2" values={{language}} defaultMessage="Default" /> </p>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.question_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_question" values={{language}} defaultMessage="Default" /> </h4>
                </motion.div>
        </motion.div>
        <motion.div 
        className={classes.answer_container}
        initial={{opacity:0,translateY:-100,skewX:0}}
        whileInView={{opacity:1,translateY:0,skewX:-20}}
        transition={{duration:0.6,type: "spring", stiffness: 30}}
        viewport={{ once: true, }}
        >
             <motion.div>
                <h4> <FormattedMessage id="faq_answer" values={{language}} defaultMessage="Default" /> </h4>
                <p><FormattedMessage id="faq_answer_3" values={{language}} defaultMessage="Default" /> </p>
                </motion.div>
        </motion.div>
        </div>
        </AnimatePresence>
        </IntlProvider>
    </>
}

export default FAQ;