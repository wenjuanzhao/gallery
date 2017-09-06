import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from "./config/Route-Config"

import 'antd/dist/antd.css';
import './styles/App.css';
import './styles/base.css';
import './styles/BookList.css';
import './styles/ColumnHeader.css';
import './styles/Home.css';
import './styles/ListLoadMore.css';
import './styles/Login.css';
import './styles/MovieDetail.css';
import './styles/MovieMenu.css';
import './styles/Music.css';
import './styles/NewsList.css';
import './styles/Pages.css';
import './styles/Spot.css';
import './styles/TopList.css';
import './styles/MovieItem.css';
import './styles/MovieColumn.css';
ReactDOM.render(<div>{RootRouter}</div>, document.getElementById('root'));
