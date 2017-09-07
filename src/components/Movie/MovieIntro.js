import React,{Component} from "react"
import {Card,Col} from "antd"
import {comments,commentsMore} from "../../common/mock";
import Loading from "../Loading"
import ListLoadMore from "../../ListLoadMore"
export default class MovieIntro extends Component{
    constructor(props){
        super(props);
       this.state={
           commentList:comments.commentList,
           count:1,
           iconLoading:false
       }
       this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleClick(){
      this.setState({
          iconLoading:true
      })
        setTimeout(()=> {
            this.setState({
                count: this.state.count > 0 ? this.state.count - 1 : 0,
                iconLoading: false,
                commentList: [...this.state.commentList, ...commentsMore.commentList]
            });
        }, 1000);
    }
    render(){
        let commentList=this.state.commentList.map(function (item) {
            return (
                <div className='movie_comment' key={item.id}>
                    <div className='movie_commentator'>
                        <img src={item.url}/>
                        <span>{item.name}</span>
                        <span className='movie_commentdate'>{item.time}</span>
                    </div>
                    <p>{item.content}</p>
                </div>
            )
        })
        return (
            <Col span={18}>
                <Card title="影片简介" className="movie_intro">
                    {this.props.data!==null?this.props.data.summary:""}
                </Card>
                <Card title="评论" className="movie_intro">
                    {commentList}
                    <ListLoadMore isLoading={this.state.iconLoading}
                                  handleClick={this.handleClick}
                                  count={this.state.count}
                    />
                </Card>
            </Col>
        )
    }
}