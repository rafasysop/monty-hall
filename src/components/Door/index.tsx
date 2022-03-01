import DoorModel from '../../model/door'
import Gifts from '../Gift'
import styles from './styles.module.scss'

interface DoorProps {
  door: DoorModel
}

function Door(props: DoorProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${props.door.active && styles.active}`}>
        <div className={styles.door}>
          <div className={styles.number} >{props.door.number}</div>
          <div className={styles.doorHandle} ></div>
          <div className={styles.gift}>
            {props.door.haveGift && props.door.open && <Gifts />}
          </div>
       </div>
      </div>
      <div className={styles.baseDoor}>
      </div>
    </div>
  )
}

export default Door
