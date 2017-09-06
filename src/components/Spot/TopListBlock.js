import React,{Component} from "react"
import {Link} from "react-router"
import Loading from "../Loading"
import {fetch_spot} from "../../common/fetch";
import TopList from "../TopList"
export default class TopListBlock extends Component{
    constructor(props){
        super(props);
        this.state={
            newsData:null,
            isLoading:true
        }
    }
    componentDidMount(){
        var that=this;
        this.setState({isLoading:true})
        fetch_spot({type:'top',count:10}).then(function (data) {
            that.setState({
                newsData:data,
                isLoading:false
            })
        }).catch(function (error) {
            console.log(error)
        })
    }
    render(){
        const {isLoading} =this.state;
        return (
            <div className="topList">
            {isLoading ? <Loading/>:<TopList data={this.state.newsData} title="热点头条" link="spot"/>}
        </div>)
    }
}