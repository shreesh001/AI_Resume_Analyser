import React from 'react'
import styles from './Admin.module.css'
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminCardBlock}>
        <Skeleton variant="rectangular" width={300} height={500} className={styles.AdminCard} />
        <div className={styles.AdminCard}>
          <div className={styles.CardName}>I am Caption</div>
          <p style={{color :"blue"}}>test1234@gmail.com</p>
          <h3>Score: 80%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
        </div>

        <div className={styles.AdminCard}>
          <div className={styles.CardName}>I am Caption</div>
          <p style={{color :"blue"}}>test1234@gmail.com</p>
          <h3>Score: 80%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
        </div>

        <div className={styles.AdminCard}>
          <div className={styles.CardName}>I am Caption</div>
          <p style={{color :"blue"}}>test1234@gmail.com</p>
          <h3>Score: 80%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
        </div>

        <div className={styles.AdminCard}>
          <div className={styles.CardName}>I am Caption</div>
          <p style={{color :"blue"}}>test1234@gmail.com</p>
          <h3>Score: 80%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
        </div>
      </div>
    </div>
  )
}

export default withAuthHOC(History);

