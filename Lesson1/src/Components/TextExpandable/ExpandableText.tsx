/* eslint-disable @typescript-eslint/no-unused-vars */

import {   useState } from "react"


interface ExpandableTextProps{
    collapsedNumber?:number,
    collapsedText?:string,
    btnTextOpen?:string,
    btnTextClosed?:string,
    className?:string,
    children:string,
    buttonColor:string,
    expanded?:boolean,

}
const ExpandableText = ({
  collapsedNumber = 20,
    children,
    btnTextOpen ='show more',
    btnTextClosed = 'show less',
    buttonColor='red',
    className='box',
    expanded=false,
}:ExpandableTextProps) => {
  const[isExpanded,setIsExpanded] = useState<boolean>(expanded)
  const handleText = ():void =>{
    setIsExpanded((prev)=>!prev)
  }
  const displayText:string = isExpanded?children: children.split(' ')
  .slice(0,collapsedNumber).join(" ") + '...'

  return (
    <div className={className}>
        {displayText}
         <button className="cursor-pointer bg-red-500" style={{color:buttonColor}} onClick={handleText}>
          {isExpanded? btnTextClosed : btnTextOpen} </button>
       
    </div>
  )
} 

export default ExpandableText

