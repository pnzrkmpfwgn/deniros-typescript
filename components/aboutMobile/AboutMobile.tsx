import Image from 'next/image';
import classes from './AboutMobile.module.css';
import classes_2 from '../../components/buttons/regular_button/Regular_button.module.css';
import { AnimatePresence,motion } from 'framer-motion';;
import Link from 'next/link';
import { IntlProvider,FormattedMessage } from 'react-intl';
import {message} from '../../data/langData';

const About = ({language}) => {
    return <>
       <IntlProvider locale={language} messages={message[language]}>
       <div style={{overflow:"hidden"}} >
        <div className={classes.about_container} >
            <AnimatePresence>
            <motion.div 
                key={2}
                initial={{opacity:0,translateY:100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{delay:0.8,duration:0.4,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                className={classes.text_container} >
                       <Image  src={"/images/4.jpg"} alt="" width={700} height={700} />
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_1" defaultMessage="Default" values={{language}} /></h2>
                <p className={classes.paragraph} ><FormattedMessage id="about_text_1" defaultMessage="Default" values={{language}} /></p>
            </motion.div>
            </AnimatePresence>
        </div>
        <div className={classes.about_container }>
        <AnimatePresence>
        <motion.div 
                key={3}
                initial={{opacity:0,translateY:100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{delay:0.8,duration:0.6,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                className={classes.text_container + " " + classes.section_2_text_container} >
                    <Image src={"/images/5.jpg"} alt="" width={400} height={100} />
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_2" defaultMessage="Default" values={{language}} /></h2>
                <p className={classes.paragraph} ><FormattedMessage id="about_text_2" defaultMessage="Default" values={{language}} /></p>
            </motion.div>
        </AnimatePresence>
        </div>
        <div className={classes.about_container}>
            <AnimatePresence>

            <motion.div 
                key={6}
                initial={{opacity:0,translateY:100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{delay:0.8,duration:0.6,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                className={classes.text_container} >
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_3" defaultMessage="Default" values={{language}} /></h2>
                <p className={classes.paragraph} ><FormattedMessage id="about_text_3" defaultMessage="Default" values={{language}} /></p>
                <iframe style={{marginRight:"10px",marginLeft:"10px"}} width="90%" height={400} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <div style={{display:"flex",flexDirection:"column",width:"320px"}} >
                    <div className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <a style={{color:"rgb(71, 71, 71)"}}   href="https://www.google.com/maps/@35.2051166,33.3822757,15z" className={classes.link} > <FormattedMessage id="about_button_1" defaultMessage="Default" values={{language}} /> </a>
                </div>
                <div className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <Link style={{color:"rgb(71, 71, 71)"}}  href="/contact" className={classes.link} > <FormattedMessage id="about_button_2" defaultMessage="Default" values={{language}} /> </Link>
                </div>
                    </div>
            </motion.div>
            </AnimatePresence>

        </div>
     
        <AnimatePresence>
            <div style={{display:'flex',justifyContent:'center',overflowX:'hidden'}} >
                <motion.div
                key={9}
                initial={{opacity:0,translateY:-100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{duration:0.6,delay:0.8,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                >
                    <div 
                    style={{zIndex:6}}
                        className={classes.text_container + " " + classes.text_container_final_section}>
                        <h2 style={{marginLeft:"20px"}} className={classes.heading} ><FormattedMessage id="menu_link_description" defaultMessage="Default" values={{language}} />  <i style={{marginLeft:"10px"}} className="fa fa-chevron-right fa-lg"></i> </h2>
                        <motion.div
                        className={classes.image_hover}
                        whileHover={{
                            scale: 1.1,
                            rotateZ:5,
                            transition: { duration: 0.5 },
                          }}
                        whileTap={{ scale: 0.8,transition:{duration:0.1} }}
                        >
                        <div className={classes.menu_link} ><Link href="/menu"><FormattedMessage id="about_us_menu_link" defaultMessage="Default" values={{language}} /> </Link> </div>
                        <Image src={"/images/6.jpg"} alt="" width={400} height={300} />
                        </motion.div>
                     </div>
                </motion.div>
            </div>
        </AnimatePresence>
        </div>
       </IntlProvider>
    </>
} 

export default About;