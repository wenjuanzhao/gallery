import React ,{Component}from 'react'
import ColumHeader from "../ColumnHeader";
import BookList from "./BookList"
export default class BookColumn extends Component{
    render(){
        return (
            <div>
                <ColumHeader
                   title="热门图书" isMore={true} id="book" target="/book"
                />
                <BookList/>
            </div>
        )
    }
}