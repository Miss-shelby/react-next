
// import AccordionItems from "./AccordionItems"
import { useState } from "react"

// interface Faq{
// title:string,
// text:string,
// }
// interface Faqs{
//     data:Faq[]
// }
// const Accordion = ({data}:Faqs) => {
//     return <div className="accordion">
//         {data.map((el,i)=> (
//             <AccordionItems key={i} title={el.title} text={el.text} num={i} />
//             // <li key={i}>{el.text}</li>
//         ))}
//     </div>
// }
 

// export default Accordion

//VERSION 2


import AccordionItems from "./AccordionItems"

interface Faq{
title:string,
text:string,
}
interface Faqs{
    data:Faq[]
}
const Accordion = ({data}:Faqs) => {
    const [curOpen,setCurOpen] = useState<null | number>(null)
    return <div className="accordion">
        {data.map((el,i)=> (
            <AccordionItems key={i} curOpen={curOpen} onOpen={setCurOpen} title={el.title}  num={i} >
                {el.text}
                </AccordionItems>
        ))}
        <AccordionItems title='How to Learn React' curOpen={curOpen} onOpen={setCurOpen} num={22}>
            <ul>
                <li>learn</li>
                <li>Pratcice</li>
                <li>Build projects</li>
            </ul>
        </AccordionItems>
    </div>
}
 

export default Accordion
