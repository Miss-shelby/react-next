
import { ReactNode } from "react"
interface ListProps<T> {
    items:T[],
    render:(item:T)=>ReactNode
}
//this list componenet can render any data hence the generic t
const List =<T,> ({items,render}:ListProps<T>) => {
  return (
    <div className="list">
      <h2>Rendering a list item with typescript generic</h2>
      <ul>
        {
           items.map((item,id)=>{
            return <li key={id}>
                {render(item)}
            </li>
           })
        }
      </ul>
    </div>
  )
}

export default List
