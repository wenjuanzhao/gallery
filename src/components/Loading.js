import React,{Component} from 'react';
import {Spin} from 'antd'
const Loading =function () {
    return(
        <div className="loading">
            <Spin />
        </div>
    )
}
export default Loading