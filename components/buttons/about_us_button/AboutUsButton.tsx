import classes from '../regular_button/Regular_button.module.css'
import {message} from '../../../data/langData';
import { IntlProvider,FormattedMessage } from 'react-intl';
const AboutUsButton = ({handleScroll,language}) =>{
    return <IntlProvider locale={language} messages={message[language]} >
      <div onClick={() => handleScroll()} className={classes.button + " " + classes.button_} id="button-5">
    <div className={classes.translate}></div>
    <button className={classes.link} ><FormattedMessage id="about_us_button" defaultMessage="Default" values={{language}} ></FormattedMessage></button>
  </div>
    </IntlProvider>
}

export default AboutUsButton;