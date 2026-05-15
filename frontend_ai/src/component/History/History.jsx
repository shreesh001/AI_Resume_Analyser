import React from 'react'
import styles from './History.module.css'
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        <Skeleton variant="rectangular" width={300} height={500} className={styles.HistoryCard} />
        <div className={styles.HistoryCard}>
          <div className={styles.CardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name: resume1.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
          <p>Dated: 2023-10-17</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.CardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name: resume1.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
          <p>Dated: 2023-10-17</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.CardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name: resume1.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
          <p>Dated: 2023-10-17</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.CardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name: resume1.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
          <p>Dated: 2023-10-17</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.CardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name: resume1.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam corporis obcaecati molestiae dignissimos, dolorem blanditiis iusto dicta amet? Consequuntur blanditiis quis assumenda fugit deleniti sapiente corporis minima illum voluptate eligendi, possimus similique quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sint nam. Odio ipsum exercitationem expedita repellat illum, odit recusandae libero mollitia error deserunt unde est, culpa alias consectetur repudiandae quasi. Porro mollitia recusandae adipisci.</p>
          <p>Dated: 2023-10-17</p>
        </div>
      </div>
    </div>
  )
}

export default withAuthHOC(History);
