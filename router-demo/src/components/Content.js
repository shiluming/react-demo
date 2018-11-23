
import React, { Component }  from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
           <div>我是详情页面 {this.props.match.params.newId}</div> 
        );
    }
}

export default Content;