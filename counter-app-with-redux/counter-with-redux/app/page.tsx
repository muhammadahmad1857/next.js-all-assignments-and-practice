"use client"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset } from './(store)/counterSlice'
export default function counterApp() {
  const count = useSelector((store) => store.CounterSlice.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1
        style={{
          marginTop: "20px",
          fontSize: "100px",
          textAlign: "center",
          marginBottom: "-10px",
        }}
      >
        COUNTER APP
      </h1>
      <hr />

  <h1>{count}</h1>
<div style={{display:"flex",gap:"30px"}}>
  <button onClick={()=>dispatch(increment())}>Increment </button>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  { count!==0&&
  <button onClick={()=>dispatch(reset())}>Reset</button>}
</div>

    </div>
  );
}
