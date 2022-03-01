import Door from "../components/Door";
import DoorModel from "../model/door";

import styles from "../styles/Home.module.scss";

export default function Home() {

  const d1 = new DoorModel(1)
  const d2 = new DoorModel(2)
  return (
    <div className={styles.container}>
      <Door door={d1} />
      <Door door={d2} />
    </div>
  )
}
