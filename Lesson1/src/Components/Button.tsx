
//to use typescript we pratically add type to all our elements

// import { Children, ReactNode } from "react";

// export const Button = ({ color,fontSize,rounded }:
//    {
//      color: string;
//      fontSize:number;
//      rounded:boolean;
//     }) => {
//   return (
//     <button>hello</button>
//   );
// };

//we can clean up the above  code via:
//we can make a props optional by adding a question mark that way you can omit it
//you can specifically state the color you want yourself e.g color:'red'|'blue' | 'green'


// type Color ='red' | 'blue' |'green' |'pink'
// type ButtonPrps={
//   color:Color;
//   backgroundColor:Color;
//      fontSize:number;
//      rounded?:boolean;
//      padding:number[]; //this would accept array of many numbers as possible
//      paddings?:[number,number,number,number]; //we could speicy how many numbers we want in the array with their types
// }
// export const Button = ({ color,fontSize,rounded,padding,paddings }:
//   ButtonPrps) => {
//  return (
//    <button>hello</button>
//  );
// };


//we can simply this further by creating an object for all th css properties
// type ButtonProps={
//  style:React.CSSProperties;
//  onClick: (test:string)=>string;
//  children:ReactNode;
// }
//for function
// export const Button = ({ style,onClick }:
//   ButtonProps) => {
//  return (
//   //  <button style={style} onClick={onClick}>{Children}</button>
//  );
// };

