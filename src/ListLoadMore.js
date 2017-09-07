import React from "react"
import {Button} from 'antd'

const ListLoadMore =function ({isLoading,handleClick,count}) {
      return (
          <div className="list_load">
              {count>0?
                  <Button onClick={handleClick} loading={isLoading}>加载更多</Button>:<p>没有更多了</p>
              }
          </div>
      )
}
export default ListLoadMore