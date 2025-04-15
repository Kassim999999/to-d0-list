import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'

const Counter = () => {

const [count, setCount] = useState(4)

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>
            <i class="fa-solid fa-plus"></i>
        </button>
        <button onClick={()=> setCount(count - 1)}>
            <i class="fa-solid fa-minus"></i>
        </button>
    </div>
  )
}

export default Counter