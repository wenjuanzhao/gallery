import React ,{Component} from "react"
import {Pagination} from 'antd';
const Pages=function ({current,total,onChange,defaultPageSize,id}) {
   return (
       <div className="Pages" id={id}>
       <Pagination
           current={current}
           total={total}
           defaultPageSize={defaultPageSize}
           onChange={onChange}
           simple
       />
   </div>
   )
}
export default Pages