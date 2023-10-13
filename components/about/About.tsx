import Image from 'next/image';
import classes from './About.module.css';
import classes_2 from '../../components/buttons/regular_button/Regular_button.module.css';
import { AnimatePresence,motion} from 'framer-motion';
import Link from 'next/link';
import { IntlProvider,FormattedMessage } from "react-intl";
import {message} from '../../data/langData';

interface Props {
    language:string;

}

const About:React.FC<Props> = ({language}) => {
      
    return <>
        <IntlProvider locale={language} messages={message[language]} >
        <div  className={classes.about_container} >
            <AnimatePresence>
            <motion.div
                key={1}
                initial={{opacity:0,translateY:-100,skewX:0}}
                whileInView={{opacity:1,translateY:0,skewX:-20}}
                transition={{duration:0.6,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                >
                    <Image className={classes.rounded_image} src={"/images/4.jpg"} alt="" width={500} height={500} />
            </motion.div>
            <motion.div 
                key={2}
                initial={{opacity:0,translateY:100 ,skewX:0}}
                whileInView={{opacity:1,translateY:0,skew:15}}
                transition={{delay:0.8,duration:0.6,type: "spring", stiffness: 30}}
                className={classes.text_container}
                viewport={{ once: true,  }}
                >
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_1" defaultMessage="Default" values={{language}} ></FormattedMessage></h2>
                <p className={classes.paragraph} ><FormattedMessage id="about_text_1" defaultMessage="Default" values={{language}} ></FormattedMessage></p>
            </motion.div>
            </AnimatePresence>
        </div>
        <div className={classes.about_container + " " + classes.section_2}>
        <AnimatePresence>
        <motion.div 
                key={3}
                initial={{opacity:0,translateY:100 ,skewX:0}}
                whileInView={{opacity:1,translateY:0,skew:-15}}
                transition={{delay:0.8,duration:0.6,type: "spring", stiffness: 30}}
                viewport={{ once: true  }}
                className={classes.text_container + " " + classes.section_2_text_container} >
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_2" defaultMessage="Default" values={{language}} ></FormattedMessage></h2>
                <p className={classes.paragraph}><FormattedMessage id="about_text_2" defaultMessage="Default" values={{language}} ></FormattedMessage></p>
            </motion.div>
            <motion.div
                key={4}
                initial={{opacity:0,translateY:-100,skewX:0}}
                whileInView={{opacity:1,translateY:0,skewX:10}}
                transition={{duration:0.6,delay:0.8,type: "spring", stiffness: 30}}
                viewport={{ once: true  }}
                >
                    <Image className={classes.rounded_image_2} src={"/images/5.jpg"} alt="" width={400} height={300} />
            </motion.div>
        </AnimatePresence>
        </div>
        <div className={classes.about_container}>
            <AnimatePresence>
            <motion.div
                key={5}
                initial={{opacity:0,translateY:-100,skewX:0}}
                whileInView={{opacity:1,translateY:0,skewX:-20}}
                transition={{duration:0.6,delay:0.8,type: "spring", stiffness: 30}}
                viewport={{ once: true,  }}
                className={classes.map + " " + classes.rounded_image}
                >
                     <iframe
                          src={`https://www.google.com/maps/embed/v1/place?q=35.336758,+33.309841&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          loading="lazy">
                        </iframe>
                    <div style={{display:"flex",width:"500px",marginLeft:"50px"}} >
                    <div style={{marginLeft:"75px",width:"100%"}} className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <a href={`https://www.google.com/maps/place/35°20'12.3"N+33°18'35.4"E/@35.3367577,33.3076525,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5750fa48c6dba074!8m2!3d35.3367577!4d33.3098412?hl=tr`} className={classes.link} > <FormattedMessage id="about_button_1" defaultMessage="Default" values={{language}} ></FormattedMessage> </a>
                </div>
                <div style={{marginLeft:"75px",width:"100%"}} className={classes_2.button + " " + classes_2.button_} id="button-5">
                    <div className={classes_2.translate}></div>
                    <Link href="/contact" className={classes.link} > <FormattedMessage id="about_button_2" defaultMessage="Default" values={{language}} ></FormattedMessage> </Link>
                </div>
                    </div>
            </motion.div>

            <motion.div 
                key={6}
                initial={{opacity:0,translateY:100 ,skewX:0}}
                whileInView={{opacity:1,translateY:0,skew:15}}
                transition={{delay:0.8,duration:0.6,type: "spring", stiffness: 30}}
                viewport={{ once: true  }}
                className={classes.text_container + " " + classes.text_final_container} >
                <h2 className={classes.heading} ><FormattedMessage id="about_heading_3" defaultMessage="Default" values={{language}} ></FormattedMessage></h2>
                <p className={classes.paragraph} ><FormattedMessage id="about_text_3" defaultMessage="Default" values={{language}} ></FormattedMessage></p>
            </motion.div>
            </AnimatePresence>
        </div>

        <AnimatePresence>
            <div style={{display:'flex',justifyContent:'center',overflow:'hidden'}} >
                <motion.div
                key={9}
                initial={{opacity:0,translateY:-100}}
                whileInView={{opacity:1,translateY:0}}
                transition={{duration:0.6,delay:0.8,type: "spring", stiffness: 30}}
                viewport={{ once: true  }}
                >
                    <motion.div 
                    style={{zIndex:6}}
                        className={classes.text_container + " " + classes.text_container_final_section}>
                        <h2 style={{marginLeft:"20px"}} className={classes.heading} ><FormattedMessage id="menu_link_description" defaultMessage="Default" values={{language}} /> <i style={{marginLeft:"10px"}} className="fa fa-chevron-right fa-lg"></i> </h2>
                        <motion.div
                        key={10}
                        className={classes.image_hover}
                        whileHover={{
                            scale: 1.1,
                            rotateZ:5,
                            transition: { duration: 0.5 },
                          }}
                        whileTap={{ scale: 0.8,transition:{duration:0.1} }}
                        >
                        <div className={classes.menu_link}> <Link style={{position:'absolute',top:"200px",left:"50px"}} href="/menu"><FormattedMessage id="about_us_menu_link" defaultMessage="Default" values={{language}} ></FormattedMessage></Link> </div>
                        <Image src={"/images/6.jpg"} alt="" width={400} height={300} />
                        </motion.div>
                     </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
{/* 
        <div ref={ref_3} className={classes.final_about_section + " " + classes.split + " " + classes.left}>
            <AnimatePresence>
            <motion.div 
                key={7}
                initial={{opacity:0,translateY:100 ,skewX:0}}
                whileInView={animation_7}
                transition={{delay:0.4,duration:0.6,type: "spring", stiffness: 100}}
                className={classes.text_container + " " + classes.centered} >
                <h2 className={classes.heading} >Want to see our menu?</h2>
            </motion.div>
            <motion.div
                key={8}
                initial={{opacity:0,translateY:-100,skewX:0}}
                whileInView={animation_3}
                transition={{duration:0.6,type: "spring", stiffness: 100}}
                >
                    <Image className={classes.rounded_image_2} src={"/images/5.jpg"} alt="" width={400} height={300} />
            </motion.div>
            </AnimatePresence>
        </div> */}
        </IntlProvider>
    </>
} 

export default About;