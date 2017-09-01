import config from "../../config"
import {actions as listAction} from "../list/index"
const actions={
    menu_ok:function (state,action) {
        return Array.isArray(action.data)?{...state,items:action.data}:state;
    },
    set_menu_id:function (state,action) {
        return {...state,id:action.id}
    },
    triggerList:function (dispatch,cate_id) {
      /*  listAction.changeList(dispatch,cate_id)*/
      console.log(11)
    },
    fetchMenu:function (dispatch,cate_id) {
     fetch(config.api+config.menu_api).then(function (rep) {
         return rep.json()
     }).then(function (json) {
        if(json.code===0){
            dispatch({type:'menu_ok',data:json.data})
            if(!cate_id){
                cate_id=json.data[0].id
            }
            this.triggerList(dispatch,cate_id)
        }
     })
    },

}
export default actions