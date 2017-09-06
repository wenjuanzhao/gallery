import React,{Component} from 'react'
import MovieBanner from "../components/Movie/MovieBanner"
import {Layout,Rate,Card,Icon,Row,BackTop} from 'antd'
export default class MovieDetaiContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            data:null,
            isLoading:true
        }
    }
    render(){
        return (
                <div className="movie_detail">
                    <MovieBanner/>
                </div>
        )
    }
}