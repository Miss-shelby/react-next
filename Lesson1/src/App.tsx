import './App.css'
import Counter from './Components/Counter'
import Heading from './Components/Heading'
import List from './Components/List'
// import Section from './Components/Section'
// import { Button } from './Components/Button'

import { useCallback, useState,useMemo, useRef } from 'react'
import Section from './Components/Section'
interface User{
  id:number,
  userName:string
}
type FibFunc = (n:number)=> number;
function App() {
  const fib:FibFunc= (n)=>{
  if (n<2) return n;
  return fib(n-1) + fib(n-2);
  }
const [users,setUsers]=useState<User[]|null>(null)
//here It indicates that users can either be an array of User objects
// e.g users=[{id:1,userName:'Black'},{id:2,userName:'Cythia'}] or null.
const [count,setCount] = useState(1)
const [counts,setCounts] = useState(0)
const updateCounts= useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCounts((prev)=> prev+1),[])
//use callback memoizes a function
//use memo: memeoizes a value,lets say yu have a long calculation to do,it takes a while to perfeorm and the 
//memoizes the result so it dosent take time again to recalculate the result lets say the second time if the dependency array chnages

const myNumber:number = 20;
const result = useMemo<number>(()=>fib(myNumber),[myNumber])
//use ref

const inputRef = useRef<HTMLInputElement>(null)
console.log(inputRef?.current,'current input');
console.log(inputRef?.current?.value,'current input value');

  return (
    <>
     {/* <Button style={
      {background:'blue',
        color:'white'
      }
     } onClick={onClick}/> */}
     {/* <Button>Click me</Button> */}
     <button onClick={updateCounts}>ADD Num</button>
     <p>{counts}</p>
     <Heading title ='tee' age={23}/>
     <Section  title='new heading'>
     <button >Click me </button>
     </Section>
     <Counter setCount={setCount}>Count is {count}</Counter>
     <List items={['Cofee☕','shawarama🌭','code💻']}render={(item:string)=><p>{item}</p>} />
     <p>{result}</p>
     <input ref={inputRef} type='text' />
    </>
  )
}

export default App
