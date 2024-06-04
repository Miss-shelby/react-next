import { ReactElement } from "react"

type HeaderProps={
    title:string,age:number
}
//you can decide to state what the component returns which is a jsx element
const Heading = ({title,age}:HeaderProps) :ReactElement => {
  return (
    <div>
      <h1>My name is  {title} and {age} years old</h1>
    </div>
  )
}

export default Heading
