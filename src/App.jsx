import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Renan Pullig"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas porro et quod maxime nisi labore hic dolores aut veritatis neque asperiores quo accusamus illum ex minus, quam aliquid ullam?"
          />
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas porro et quod maxime nisi labore hic dolores aut veritatis neque asperiores quo accusamus illum ex minus, quam aliquid ullam?"
          />
        </main>
      </div>
    </>
  )
}

