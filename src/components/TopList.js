import React from "react"
import {Link} from "react-router"
const TopList=function ({data,title,link}) {
  if(!data){
      return <h3>没有数据</h3>
  }
  const topList=data.map(function (item,index) {
     return (
         <li key={item.uniqueKey}>
             <Link  to={`${link}/${item.uniqueKey}`}>
                 <span>{index+1}</span>
                 {item.title}
             </Link>
        </li>
     )
  })
    return(
       <ul>
           <li><h3>{title}</h3></li>
           {topList}
       </ul>
    )
}
export default TopList