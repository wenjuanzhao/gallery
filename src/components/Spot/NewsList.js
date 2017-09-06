import React,{Component} from "react"
import {Link} from "react-router"
const NewsList=function ({newsData}) {
    if(!newsData){
        return <h3>没有数据</h3>
    }
    const newsList=newsData.map(function (newsItem,index) {
      return   <li key={newsItem.uniqueKey}>
          <Link to={`spot/${newsItem.uniqueKey}`}>
              <img src={newsItem.thumbnail_pic_s}/>
              {newsItem.title}
          </Link>
      </li>
    })
    return(
        <div className="newsList">
            <ul>{newsList}</ul>
        </div>
    )
}
export default NewsList