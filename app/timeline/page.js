import React from 'react';
import Navbar from '../../components/navbar.js';
import styles from '../../styles/Timeline.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <main className={styles.main}>
        <div className={styles.boxWrapper}>
            <div className={styles.whiteBox}>
              <h2>Add our GCAL <a href="https://calendar.google.com/calendar/embed?src=cs124honors%40gmail.com&ctz=America%2FChicago" target="_blank">here</a></h2>
              <div style={{ display: "flex", justifyContent: "center", align: "center", height: "85%", width: "100%"}}>
                {/* add &mode=WEEK at the end of the url to change to week view */}
                <iframe src="https://calendar.google.com/calendar/embed?src=cs124honors%40gmail.com&ctz=America%2FChicago" 
                  style={{
                    border: "10",  
                    flex: 1 }} 
                  frameBorder="0" 
                  scrolling="no">
                </iframe>
              </div>
            </div>
            <div className={styles.greyBox}>
              <h2>Upcoming Events</h2>
                <div className={styles.whiteBoxMini}>
                  <p className={styles.eventBoxText}>This is the mini event 1 white box.</p>
                </div>

                <div className={styles.whiteBoxMini}>
                    <p className={styles.eventBoxText}>This is the mini event 2 white box.</p>
                </div>

                <div className={styles.whiteBoxMini}>
                    <p className={styles.eventBoxText}>This is the mini event 3 white box.</p>
                </div>
            </div>
          </div>
        </main>
    </div>
  );
}