import React,{Component} from 'react'
import ColumnHeader from "../ColumnHeader"
import MovieItem from './MovieItem'
import {Row} from 'antd'
export default class MovieList extends  Component{
    render(){
        let itemList=null;
        const {MoviesData,type,current}=this.props;
        if(MoviesData){
            if(type==="use_box"){
                itemList=MoviesData.map(function (item) {
                   return (
                       <MovieItem
                           key={item.subject.id}
                           id={item.id}
                           imgUrl={item.subject.images.large}
                           title={item.subject.title}
                           rating={item.subject.rating.average}
                       />
                   )
                })
                let endLength=current*4<itemList.length?current*4:itemList.length;
                itemList=itemList.slice((current-1)*4,endLength)
            }
            else{
                itemList=MoviesData.map(function (item) {
                    return (
                        <MovieItem
                            key={item.id}
                            id={item.id}
                            imgUrl={item.images.large}
                            title={item.title}
                            rating={item.rating.average}
                            genre={item.genres[0]}
                        />
                    )
                })
            }
        }
        return(
            <Row gutter={16}>{itemList}</Row>
        )
    }

}
