import fetchJsonp from "fetch-jsonp"
import * as config from "../config"

require('es6-promise').polyfill();
export function fetch_movie(opt) {
   //{start: 0, count: 5, type: "in_theaters"}
    if(!opt)
    {
        return false
    }
    let REQUEST_PATH=`${config.SERVER_PATH}movie/${opt.type}`;
    if(opt.type!=='us_box'){
        REQUEST_PATH+=`?start=${opt.start}&count=${opt.count}`;
    }
    const result=fetchJsonp(REQUEST_PATH,{timeout:3000})
    return result.then(function (resp) {
        return resp.json();
    }).catch(function (err) {
        console.log(err)
    })
}
export function fetch_spot(opt) {
    return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${opt.type}&count=${opt.count}`,{method:'GET'}).then(function (response) {
        return response.json();
    })

}
export function fetch_movieDetail(opt) {
    if(!opt){
        return false;
    }
    const REQUEST_PATH=`${config.SERVER_PATH}movie/subject/${opt.id}`;
    const result=fetchJsonp(REQUEST_PATH)
    return result.then(function (resp) {
        return resp.json();
    }).catch(function (error) {
        console.log(error)
    })
}


