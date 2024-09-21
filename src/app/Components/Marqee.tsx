// components/Marquee.js
import styles from './Marqee.module.css';

const Marquee = () => {
  return (
    <div className='bg-orange-400 text-white'>
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        <p> 
          Adimission HelpLine +91 6382167899 | edhuntinfotech@gmail.com </p>
      </div>
    </div>
    </div>
  );
};

export default Marquee;
