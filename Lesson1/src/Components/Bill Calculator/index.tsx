// import React from 'react'

import { ReactNode, useState } from "react"

const Bill = () => {
    const [myRate,setMyRate] = useState< number >(0)
    const [myRate2,setMyRate2] = useState< number >(0)
    const [bill,setBill] = useState<number | string>('')

    const tip:number =  typeof bill === 'number' ?bill * ((myRate + myRate2) / 2 / 100):0;
    const resetBill=():void=>{
        setBill('')
        setMyRate(0)
        setMyRate2(0)
    }
  return (
    <div>
        <BillValue bill={bill} onSelect={setBill}/>
       <SelectPercentage  rate={myRate} onSelect={setMyRate}>How did you like the service</SelectPercentage>
       <SelectPercentage  rate={myRate2} onSelect={setMyRate2}>How did your friend like the service?</SelectPercentage>
       {typeof bill === 'number' && bill > 0 && <Output bill={bill} onReset={resetBill} tip={tip}/>}
       
    </div>
  )
}
interface BillProps{
    bill:number |string ;
    onSelect:React.Dispatch<React.SetStateAction<string | number>>;
}
export const BillValue = ({bill,onSelect}:BillProps)=>{
    console.log( bill);
    return (
        <div>
             <label>
        How much was the bill?
      <input type="text" value={bill} onChange={((e)=> onSelect(Number(e.target.value)))} />
        </label>
        </div>
    )
}

interface ReviewProps{
    rate:number;
    onSelect:React.Dispatch<React.SetStateAction<number>>;
    children:ReactNode;
}
export const SelectPercentage = ({rate,onSelect,children}:ReviewProps)=>{
    console.log(rate);
    
    return (
        <div>
             <label >{children}
            <select value={rate} onChange={((e)=>onSelect( Number( e.target.value)))}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </label>
        </div>
    )
}

interface OutProps{
    bill:number ;
    onReset:()=>void;
    tip:number;
}
export const Output=({bill,onReset,tip}:OutProps)=>{
    const totalBill:number = bill + tip;
    
    return (
        <div>
            <p>You pay ${totalBill} (${bill} +${tip} tip) </p>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}


export default Bill
