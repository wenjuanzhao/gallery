import React from 'react';
import RecatDOM from 'react-dom'
class Welcome extends React.Component{
    constructor(props){
        super(props);
      this.state={date:new Date()};
    }
   /* setDate(){
        this.setState({tt:new Date().getMonth()})
    }
    componentWillMount(){
        this.setDate();
    }*/
   tick(){
     this.setState({date:new Date()})
   }
    componentDidMount(){
        this.timer=setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
       return  (
           <div>
               <h1>hello {this.props.name}</h1>
               <h2>{this.state.date.getSeconds()}</h2>
               <div classID="test"></div>
           </div>
       )
    }
}
export  default  Welcome;