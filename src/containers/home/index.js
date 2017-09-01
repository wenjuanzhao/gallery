import React from 'react';
import App from '../../components/App';
import Menu from '../../components/menu/index'
import Banner from '../../components/banner/index'
import List from '../../components/list/index'
export class Home extends React.Component{

    componentWillMount(){
       /* store.dispatch({type:'menu_ok',id:this.props.match.params.id||""})*/
    }
    render(){
        return(
            <App {...this.props}>
                <Menu cate_id={this.props.match.params.id}/>
                <Banner />
                <List />
            </App>
        )
    }
}
