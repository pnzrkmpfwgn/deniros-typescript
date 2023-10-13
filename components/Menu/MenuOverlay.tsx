import Link from 'next/link';
import SocialButtons from '../buttons/social_buttons/SocialButtons';
import classes from './menuOverlay.module.css';
import Image from 'next/image';
import { createContext } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { message } from '../../data/langData';
import { useLanguage, useUpdateLanguage } from './LanguageContext';

interface LanguageContextType {
  value: string;
}
interface Props {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageContext = createContext<LanguageContextType>({ value: '' });

const MenuOverlay: React.FC<Props> = ({ navbarOpen, setNavbarOpen }) => {
  const languageContext = useLanguage(); 
  const language = languageContext.value;
  const handleLanguage:any = useUpdateLanguage();

  return (
    <LanguageContext.Provider value={languageContext}> {/* Provide the entire context object */}
      <IntlProvider locale={language} messages={message[language]}>
        <nav
          className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
            navbarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          <ul style={{ marginTop: '30px' }} className="w-full flex flex-col items-start z-20">
            <li className={classes.nav_li} onClick={(e) => { e.preventDefault(); setNavbarOpen(false); }}>
              <Link href="/" className="nav-link">
                <FormattedMessage id="nav_menu_item_1" defaultMessage="Default" values={{ language }} />
              </Link>
            </li>
            <li className={classes.nav_li} onClick={(e) => { e.preventDefault(); setNavbarOpen(false); }}>
              <Link href="/menu" className="nav-link">
                <FormattedMessage id="nav_menu_item_2" defaultMessage="Default" values={{ language }} />
              </Link>
            </li>
            <li className={classes.nav_li} onClick={(e) => { e.preventDefault(); setNavbarOpen(false); }}>
              <Link href="/contact" className="nav-link">
                <FormattedMessage id="nav_menu_item_3" defaultMessage="Default" values={{ language }} />
              </Link>
            </li>
            <li className={classes.nav_li} onClick={(e) => { e.preventDefault(); setNavbarOpen(false); }}>
              <Link href="/FAQ" className="nav-link">
                <FormattedMessage id="nav_menu_item_4" defaultMessage="Default" values={{ language }} />
              </Link>
            </li>
            <li>
              <SocialButtons />
            </li>
            <li>
              {language === 'en' && <Image onClick={handleLanguage} className={classes.flag} width={50} height={50} alt="" src="/images/tr.png" />}
              {language === 'tr' && <Image onClick={handleLanguage} className={classes.flag} width={50} height={50} alt="" src="/images/en.png" />}
            </li>
          </ul>
        </nav>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default MenuOverlay;
