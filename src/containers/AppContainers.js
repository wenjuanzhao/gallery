import React ,{Component} from 'react'
import Header from "../components/header"
import Footer from '../components/Footer'
export default class AppContainers extends Component{
    render(){
       return(
           <div>
               <Header/>
               <div className="wrap center">
                   {this.props.children}
               </div>
               <Footer/>
           </div>
       )
    }
}