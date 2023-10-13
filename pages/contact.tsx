import Link from 'next/link';
import classes from '../styles/contact.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { IntlProvider, FormattedMessage } from 'react-intl'; // Update the import
import { message } from '../data/langData';
import { useLanguage } from '../components/Menu/LanguageContext';

import Head from 'next/head';

const Contact = () => {
  const language = useLanguage();
  const language_ = language.value;
  return (
    <>
      <Head>
        <title>
          {language_ === 'en' ? 'Contact' : 'İletişim'}
        </title>
      </Head>
      <IntlProvider locale={language_} messages={message[language_]}>
        <div className={classes.heading_container}>
          <img className={classes.bg} src="/images/7.jpg" alt="" />
          <h3 className={classes.heading}>
            <FormattedMessage values={{ language_ }} id="contact_heading" defaultMessage="Default" />
          </h3>
        </div>
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, translateY: 0, skewX: 10 }}
            initial={{ opacity: 0, translateY: -100, skewX: 0 }}
            transition={{ duration: 0.6, delay: 2.5, type: 'spring', stiffness: 30 }}
            className={classes.contact_container}
          >
            <div className={classes.contact_details}>
              <address>
                <FormattedMessage id="contact_page_adress" />
              </address>
              <p>
                <FormattedMessage id="contact_page_mobile_number" />
              </p>
              <p>
                <FormattedMessage id="contact_page_landline" />
              </p>
              <Link href="#">
                WhatsApp <i className="fa fa-whatsapp"></i>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </IntlProvider>
    </>
  );
};

export default Contact;
