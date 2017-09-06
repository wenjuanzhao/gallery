import React,{Component} from "react"
import ColumnHeader from "../ColumnHeader"
import {fetch_movie} from "../../common/fetch";
import * as config from "../../config"
import MovieList from "./MovieList"
import Loading from "../Loading"
export default class MovieColumn extends Component{
    constructor(props){
        super(props);
        this.resolve=this.resolve.bind(this);
        this.pageChange=this.pageChange.bind(this);
        this.state={
            isLoading:false,
            MoviesData:null,
            current:1
        }
    }
    resolve(data){

        if(data&&!this.unmount){
            this.setState({
                MoviesData:data.subjects,
                isLoading:false
            })
        }
    }
    componentWillMount(){
        this.unmount=false;
    }
    componentDidMount(){
        this.setState({
            isLoading:true
        })
        var that=this
      fetch_movie({start:config.DEFAULT_START,count:this.props.count||4,type:this.props.type}).then(function (data) {
        that.resolve(data)
      }).catch(function (error) {
          console.log(error)
      })
    }
    componentWillUnmount(){
        this.unmount=true;
    }
    pageChange(page){
        var that=this
       this.setState({current:page})
        fetch_movie({start:(page-1)*config.DEFAULT_COUNT,count:this.props.count||4,type:this.props.type}).then(function (data) {
            that.resolve(data);
        }).catch(function (error) {
            console.log(error)
        })
    }
    render(){

        const {type,isMore,total,title,id}=this.props;
        const {MoviesData,isLoading,current}=this.state;
        return (
            <div>
               <ColumnHeader
                   title={title}
                  id={id}
                   target='./movie'
               total={total}
                   onChange={this.pageChange}
                   current={current}
                   isMore={isMore}
               />
                {isLoading?<Loading/>:<div className="movie_column">
                    <MovieList type={type} MoviesData={MoviesData} current={current}/>
                </div>}

            </div>
        )
    }
}