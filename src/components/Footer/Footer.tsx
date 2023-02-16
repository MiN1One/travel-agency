import { memo } from "react";
import classes from './Footer.module.scss';

interface FooterProps {

}

function Footer(props: FooterProps) {
  return (
    <footer className={classes.footer}>
    </footer>
  );
}

export default memo(Footer);