import { useState } from 'react'
import Gifts from '../Gift'
import styles from './styles.module.scss'

function Door(props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.container} onClick={() => setIsActive(c => !c)}>
      <div className={`${styles.frame} ${isActive && styles.active}`}>
        <div className={styles.door}>
          <div className={styles.number} >4</div>
          <div className={styles.doorHandle} ></div>
          <Gifts />
       </div>
      </div>
      <div className={styles.baseDoor}>
      </div>
    </div>
  )
}

export default Door
