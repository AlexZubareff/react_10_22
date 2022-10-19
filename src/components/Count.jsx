import { useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(5) 

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return<>
    <p>Count state: {count}</p>
    <button type="button" onClick={handleClick}>Click</button>
</>
}