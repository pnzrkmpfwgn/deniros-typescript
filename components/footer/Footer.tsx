import classes from "./Footer.module.css";

interface Props{
  footer_title:string
}

export default function Footer({footer_title}){
    return <footer title="footer" id="footer" className={classes.background + " " + classes.footer} >
        <small title="Ülkü Ayberk Yiğit" id="ülkü_ayberk_yiğit">
        {" "}
        Ülkü Ayberk Yiğit &copy; {new Date().getFullYear()}{" "}
      </small>
    </footer>
}