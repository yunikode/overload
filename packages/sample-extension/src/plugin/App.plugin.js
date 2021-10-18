import { useState } from 'react'

const plugin = (args, callback) => {
  const [count, setCount] = useState(0)
  return (
    <>
      {callback(...args)}

      <div
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </div>
    </>
  )
}

export default { 'App/renderHeaderContents': { function: plugin } }
