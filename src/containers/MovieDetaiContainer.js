import React,{Component} from 'react'
import MovieBanner from "../components/Movie/MovieBanner"
import MovieIntro from "../components/Movie/MovieIntro"
import MovieAbout from "../components/Movie/MovieAbout"
import {Layout,Rate,Card,Icon,Row,BackTop} from 'antd'
import {fetch_movieDetail} from "../common/fetch";

export default class MovieDetaiContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            data:null,
            isLoading:true
        }
        this.unmount=false
    }
    componentDidMount(){
        var that=this
        fetch_movieDetail({id:this.props.params.id}).then(function (data) {
            if(data && !that.unmount){
                that.setState({
                    data:data,
                    isLoading:false
                })
            }
        }).catch(function (error) {
            console.log(error)
        })
    }
    componentWillUnmount(){
        this.unmount=true;
    }
    render(){
        return (
                <div className="movie_detail">
                    <MovieBanner
                       isLoading={this.state.isLoading}
                       data={this.state.data}
                    />
                    <Row>
                        <MovieIntro isLoading={this.state.Loading} data={this.state.data}/>
                        <MovieAbout/>
                    </Row>
                </div>
        )
    }
}