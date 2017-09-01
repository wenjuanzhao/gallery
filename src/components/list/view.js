import React from "react"
import {connect} from "react-redux";
import actions from "./actions"
class List extends React.Component{
    constructor(props){
        super(props);
        this.scrollEnd=this.scrollEnd.bind(this)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollEnd,false)
    }
    componentDidMount(){

        window.addEventListener('scroll',this.scrollEnd,false)
    }
    scrollEnd(e){
        console.log(111)
    }
      render(){
          return(
              <div>sasasa111s</div>
          )
      }
}
function mapStateToProps(state) {
    return {
        data:state.data
    }
}
function mapDispatchToProps(dispatch) {
    return{
        fetch:function (cate_id,offset) {
            actions.fetchList(dispatch,cate_id,offset)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)