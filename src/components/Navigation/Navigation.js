import styles from './Navigation.module.scss'
import Button from '../Button/Button';


const Navigation = () => {
  return(
    <div className={styles.navigation}>
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </div>
  );
}

export default Navigation;