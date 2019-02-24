import React from 'react';
import styles from '../../../dist/styles/stars.css'

const Stars = (props) => {
  if (props.stars > 4) 
    return (
      <div>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.stars <= 4 && props.stars > 3)
    return (
      <div>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.stars <= 3 && props.stars > 2)
    return (
      <div>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.stars <= 2 && props.stars > 1)
    return (
      <div>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.stars <= 1 && props.stars > 0)
    return (
      <div>
        <span className={styles.filledStar}>&#9733;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.stars === 0 && props.reviews > 0) 
    return (
      <div>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFont}>{props.reviews} REVIEWS</span>
      </div>
    )
  if (props.reviews === 0)
    return (
      <div>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.emptyStar}>&#9734;</span>
        <span className={styles.reviewFontNone}>WRITE THE FIRST REVIEW</span>
      </div>
    )
};
export default Stars; 