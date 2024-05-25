import Title from './components/Title'
import { Subtitle }  from './components/Subtitle'
import StatusText from './components/StatusText'
import styles from './App.module.css'
import Card from './components/Card'


export default function App(){
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitle />
      <StatusText />
      <Card />
    </div>
  )
}