import classes from './SocialButtons.module.css';

const SocialButtons = () => {
    return <><div className={classes.grow_container}>
      <a href="#" className={classes.to_twitter + " " + classes.circle_button}>
        <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
      </a>
    </div>
    <div className={classes.grow_container}>
      <a href="#" className={classes.to_red + " " + classes.circle_button}>
        <i className="fa fa-google-plus fa-fw" aria-hidden="true"></i>
      </a>
    </div>
    <div className={classes.grow_container}>
      <a href="#" className={classes.to_facebook + " " + classes.circle_button}>
        <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
      </a>
    </div>
    <div className={classes.grow_container}>
      <a href="#" className={classes.to_linkedin + " " + classes.circle_button}>
        <i className="fa fa-linkedin fa-fw" aria-hidden="true"></i>
      </a>
    </div>
    <div className={classes.grow_container}>
      <a href="#" className={classes.to_instagram + " " + classes.circle_button}>
        <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
      </a>
    </div>
  </> 
}

export default SocialButtons;