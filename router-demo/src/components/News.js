import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            news:[
                {
                    newId:1111,
                    details:"我是新闻一"
                },
                {
                    newId:2222,
                    details:"我是新闻2"
                },
                {
                    newId:3333,
                    details:"我是新闻3"
                },
                {
                    newId:4444,
                    details:"我是新闻4"
                }
            ]
         };
    }
    render() {
        return (
            <div>
                <ul>

                    {
                            this.state.news.map((value,key)=>{
                                return (
                                    <li key={key}><Link to={`/content/${value.newId}`}>  {value.details} </Link></li>
                                )
                            })
                    }
                </ul>



            </div>  
        );
    }
}
export default News;