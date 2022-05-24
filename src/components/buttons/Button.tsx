import { FC } from 'react';
import styles from './Buttons.module.scss';

export type BackBtnProps = {
    onClick: ()=>void
}

const BackBtn:FC<BackBtnProps> = ({ onClick, children }) => (
  <button
    className={styles.btn}
    onClick={() => onClick()}
  >
    {children}
  </button>
);

export default BackBtn;
