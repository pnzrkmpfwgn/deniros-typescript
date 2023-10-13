import Link from 'next/link';
import classes from '../regular_button/Regular_button.module.css';

const MenuButton = () => {
    return <div className={classes.button + " " + classes.button_} id="button-5">
    <div className={classes.translate}></div>
    <Link href="/menu" className={classes.link} >Menu</Link>
  </div>
}

export default MenuButton;