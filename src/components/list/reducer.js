import ReducerFactory from "../reducerFactory";
import actions from "./actions"
const  reducer=ReducerFactory({http_state:"LOADING",items:[],msg:"",total:1,offset:0},actions);
export default reducer;