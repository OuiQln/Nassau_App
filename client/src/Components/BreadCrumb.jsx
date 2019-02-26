import React from 'react'
import styles from '../../dist/styles/breadCrumb.css'

const BreadCrumb = (props) => {
    return (
      <div>
        <a href="https://www.uniqlo.com/us/en/home/" className={styles.breadCrumbItem}>{props.breadcrumbs[0]}</a>
        <span className={styles.breadCrumb}> / </span>
        <a href="https://www.uniqlo.com/us/en/men" className={styles.breadCrumbItem}>{props.breadcrumbs[1]}</a>
        <span className={styles.breadCrumb}> / </span>
        <a href="https://www.uniqlo.com/us/en/men/outerwear-and-blazers" className={styles.breadCrumbItem}>{props.breadcrumbs[2]}</a>
        <span className={styles.breadCrumb}> / </span>
        <span className={styles.breadCrumbLocal}>{props.breadcrumbs[3]}</span>
      </div>
    )
  };
export default BreadCrumb; 


