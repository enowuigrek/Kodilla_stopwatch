import styles from './Navigation.module.scss'


const Navigation = props => {
  return(
    <div className={styles.navigation}>{props.children}</div>
  );
}

export default Navigation;