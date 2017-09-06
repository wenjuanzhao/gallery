import React,{Component} from "react"
import {Row,Col,Carousel,Tabs} from "antd"
import ColumnHeader from "../ColumnHeader"
import NewsListBlock from "./NewListBlock"
import TopListBlock  from "./TopListBlock"
import TopList from "../TopList";
const {TabPane}=Tabs;
const SpotColumn=function () {
    return (
        <div className="spot_news">
            <ColumnHeader
              title="热点新闻"
              isMore={true}
              id="spot"
              target="/spot"
            />
            <Row gutter={10}>
                <Col span={8} >
                    <Carousel  autoplay className="carousel">
                        <div><img src={require("../../image/news_carousel_1.jpg")} alt="pindadjs"/></div>
                        <div><img src={require("../../image/news_carousel_2.jpg")} alt="pindadjs"/></div>
                        <div><img src={require("../../image/news_carousel_3.jpg")} alt="pindadjs"/></div>
                        <div><img src={require("../../image/news_carousel_4.jpg")} alt="pindadjs"/></div>
                    </Carousel>
                </Col>
                <Col span={10}>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="国内" key="1">
                            <NewsListBlock type="guonei" count={5}/>
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <NewsListBlock type="guoji" count={5}/>
                        </TabPane>
                        <TabPane tab="娱乐" key="3">  <NewsListBlock type="yule" count={5}/></TabPane>
                        <TabPane tab="体育" key="4">  <NewsListBlock type="tiyu" count={5}/></TabPane>
                        <TabPane tab="军事" key="5">  <NewsListBlock type="junshi" count={5}/></TabPane>
                        <TabPane tab="社会" key="6">  <NewsListBlock type="shehui" count={5}/></TabPane>
                    </Tabs>
                </Col>
                <Col span={6}>
                    <TopListBlock/>
                </Col>
            </Row>
        </div>
    )
}
export default SpotColumn