import React from 'react'
import ReactDOM from 'react-dom'


// 定义外部组件
class List extends React.Component{
    render(){
        let arr = this.props.arr;
        return(
            <div>
                {
                    arr.map((item,index)=>{
                        return <Card key={index} arr={item} />
                    })
                }
            </div>
        )
    }
}
// 定义内部组件
function Card(props) {
    return <h1>Card：{props.arr}</h1>
}
// 定义数据
let arr = ["Message","Device","App"];
// 渲染
ReactDOM.render(<List arr={arr} />,document.getElementById("root") )

export default List;