import React, { Component } from 'react';

import '../assets/css/App.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {

            list: [
                {
                    title: 'title1',
                    checked: false
                },

                {
                    title: 'title2',
                    checked: true
                },
                {
                    title: 'title3',
                    checked: true
                },
                {
                    title: 'title4',
                    checked: false
                },
            ]
        }
    }
    //选择框事件
    checkBoxChange=(key, checked)=>{

        var tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list : tempList
        })
    }

    btnClick=(key)=>{
        var tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list : tempList
        })
    }

    enterUp=(e)=>{
        if (e.keyCode == 13) {
            let title = this.refs.todo_item.value;
            var tempList = this.state.list;
            tempList.push({
                title: title,
                checked : false
            });
            this.setState({
                list : tempList
            })
            this.refs.todo_item.value = ''
        }
        
    }



    render() {
        return (
            <div>
                <header className="title">
                
                    <input type="text" ref="todo_item" onKeyUp={this.enterUp}/>

                </header>
                
                <br />
                <hr />
                <h2>
                    待办事项
                </h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" key={key} defaultChecked={value.checked} onClick={this.checkBoxChange.bind(this, key, value.checked)} />
                                        {value.title}
                                        -----<button onClick={this.btnClick.bind(key)}>删除</button>
                                    </li>
                                )
                            }

                        })
                    }
                </ul>
                <br />
                <hr />
                <h2>
                    完成事项
                </h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" key={key} defaultChecked={value.checked} onChange={this.checkBoxChange.bind(this, key, value.checked)}/>
                                        {value.title}
                                        -----<button onClick={this.btnClick.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;