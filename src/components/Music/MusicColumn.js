import React,{Component} from 'react'
import {Row,Col} from "antd"
import ColumnHeader from "../ColumnHeader"
import TopList from "../TopList"
import MusicList from "./MusicList"
import {musicTop} from "../../common/mock"
export default class MusicColumn extends Component{
    render(){
        return (
            <div>
                <ColumnHeader
                   title="流行音乐"
                   isMore={true}
                   id="music"
                   target="/music"
                />
                <Row>
                    <Col span={17}>
                        <MusicList type="FnJPqo6IjQPLdPBmAlDRVA==" id="18823639069381202.jpg?param=140y140"/>
                    </Col>
                    <Col span={7} className="topList">
                        <TopList data={musicTop.musicList}title="新歌榜"/>
                    </Col>
                </Row>
            </div>
        )
    }
}