import React from 'react';
import styles from '../../dist/styles/app.css';

const SizeModal = (props) => {
    return (
      <div className={styles.sizeModal}>
        <div className={styles.sizeModalContent}>
        <span className={styles.sizeTitle}>SIZE CHART</span>
        <span className={styles.closeButton} onClick={()=> props.toggleSizeModal()}>&#x2715;</span>
          <div className={styles.insideModal}>
            <img src="./Pictures/size01.png" className={styles.sizePic}></img>
            <img src="./Pictures/size02.png" className={styles.sizePic}></img>
            <img src="./Pictures/size03.png" className={styles.sizePic}></img>
            <img src="./Pictures/size04.png" className={styles.sizePic}></img>
            <img src="./Pictures/size05.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size06.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size07.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size08.png" className={styles.sizePic}></img>
            <img src="./Pictures/size09.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size10.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size11.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size12.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size13.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size14.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size15.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size16.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size17.png" className={styles.sizePic}></img>
            <img src="./Pictures/size18.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size19.jpg" className={styles.sizePic}></img>
            <img src="./Pictures/size20.jpg" className={styles.sizePic}></img>
          </div>
        </div>
      </div>
    
    )
  };
export default SizeModal;