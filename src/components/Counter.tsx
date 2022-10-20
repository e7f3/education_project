import classes from './Counter.module.scss'

import { useState } from 'react'

interface Props {}

export const Counter = ({}: Props) => {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button} onClick={handleClick}>
        increment
      </button>
    </div>
  )
}
