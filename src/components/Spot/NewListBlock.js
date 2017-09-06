import React,{Component} from 'react'
import {fetch_spot} from "../../common/fetch";
import Loading from '../Loading'
import NewsList from "./NewsList"
class NewListBlock extends  Component{
    constructor(props){
        super(props);
        this.state={
            newsData:null,
            isLoading:false
        }
    }
    componentDidMount(){
        var that=this;
        this.setState({
            isLoading:true
        })
        fetch_spot({type:this.props.type,count:this.props.count}).then(function (data) {

            that.setState({
                newsData:data,
                isLoading:false
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
    render(){
        const {isLoading}=this.state;
        return(
            <div>
                {isLoading?<Loading/>:<NewsList newsData={this.state.newsData}/>}
            </div>
        )
    }
}
export default NewListBlock
