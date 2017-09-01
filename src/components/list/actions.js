import config from "../../config/index";
const actions ={
    list_loading:function (state,action) {

        return{...state,http_state:"LOADING",cate_id:action.cate_id};
    },
      list_ok:function (state,action) {
          var data=action.data;
          return {...state,data}
      },
    list_fail:function (state,action) {
       return {...state,msg:action.msg,http_state:"FAIL"}
    },
    fetchList:function (dispatch,id,offset) {
        console.log(11)
        dispatch({type:"list_loading",cate_id:id})
        fetch(config.api+config.list_api).then(function (resp) {
            return resp.json();
        }).then(function (json) {
            if(json.code===0){
                dispatch({type:"list_ok",data:json.data})
            }else{
                dispatch({type:"list_fail",msg:json.msg})
            }
        })
    },
    changeList:function (dispatch,id) {
        dispatch({type:"list_change"});
        this.fetchList(dispatch,id,0)
    }
}
export default actions;