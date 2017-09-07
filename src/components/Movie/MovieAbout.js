import React,{Component} from "react"
import {Row,Card,Col} from "antd"
import {message,correlations} from "../../common/mock"

const MovieAbout=function () {
      const messageList=message.messageList.map(function (item) {
          return (
              <div key={item.id}>
                  <Row>
                      <Col span={6}>
                          <img src={item.url}/>
                      </Col>
                      <Col span={17} offset={1}>
                          <p>{item.title}</p>
                          <p>{item.name}</p>
                      </Col>
                  </Row>
              </div>
          )
      })
      const correlationList=correlations.correlationList.map(function (item) {
          return (
              <div key={item.id}>
                  <Row>
                      <Col span={6}>
                          <img src={item.url}/>
                      </Col>
                      <Col span={16} offset={2}>
                          <p>{item.title}</p>
                          <p>{item.name

                          }</p>
                      </Col>
                  </Row>
              </div>
          )
      })
    return(
        <div>
            <Col span={5} offset={1} className="movie_about">
                <Card title="相关电影" style={{marginBottom:20}}>
                    {correlationList}
                </Card>
                <Card title="电影资讯" style={{marginBottom:20}}>
                    {messageList}
                </Card>
            </Col>
        </div>
    )
}
export default MovieAbout