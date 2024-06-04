// import {  useState } from "react";

import { ReactNode } from "react";

// type AccordionProps={
//     title:string;
//     num:number;
//     text:string;
// }

// const AccordionItems = ({title,num,text}:AccordionProps) => {
//   const [isOpen,setIsOpen] = useState<boolean>(false)
//   const handleToggle=():void=>{
//     setIsOpen(isOpen=>(!isOpen))
//   }
//   return (
//     <div  onClick={handleToggle} className={`item ${isOpen ?'open':''} `}>
//       <p className="number">{num}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen?'-' :'+'}</p>
//       {
//         isOpen && <div className="content-box">{text}</div>
//       }
//     </div>
//   )
// }

// export default AccordionItems

//VERSION2

type AccordionProps={
  title:string;
  num:number;
  curOpen:null | number;
  onOpen:React.Dispatch<React.SetStateAction<null | number>>;
  children:ReactNode;
}

const AccordionItems = ({title,num,curOpen,onOpen,children}:AccordionProps) => {
const isOpen:boolean = num === curOpen;

const handleToggle=():void=>{
  onOpen( isOpen? null :num)
  console.log(num,'index number');
  console.log(curOpen,'currently opened state');
  console.log(isOpen);
  
  
  
  // setIsOpen(isOpen=>(!isOpen))
}
return (
  <div  onClick={handleToggle} className={`item ${isOpen ?'open':''} `}>
    <p className="number">{num}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen?'-' :'+'}</p>
    {
      isOpen && <div className="content-box">{children}</div>
    }
  </div>
)
}

export default AccordionItems


//EXPLANATIONS
//curOpen is a state variable that holds the currently opened accordion item's index (a number) or null if no item is open.
//setCurOpen is a function to update curOpen.
//onOpen: a function to update curOpen.
//isOpen is a boolean that checks if the current item's index ie num is equal to curOpen.
// If num equals curOpen, isOpen will be true, otherwise, it will be false.
//The toggle function updates curOpen to the current item's index (num).
//onOpen Function: The onOpen function (setCurOpen) takes a number as an argument and 
//sets curOpen to that number, effectively opening the corresponding accordion item. 
//When called with num, it updates the curOpen state to the current item's number, making that item open.
//Toggle Logic: When an item is clicked, the onOpen function sets curOpen to that item's number,
// effectively closing any other open item because curOpen can only hold one value at a time.

//Why Only One Item Can Be Open
//The design of the state and comparison logic means that at any given time, only one item's number can match the curOpen state.
// When curOpen is set to a new number, it no longer matches any previously set number, thereby "closing"
// any other item that might have been open.