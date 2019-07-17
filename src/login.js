import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
class Login extends React.Component {           //定义一个Login组件
    constructor(props) {
//Conceptually, components are like JavaScript functions. 
//They accept arbitrary inputs (called “props”) 
//and return React elements describing what should appear on the screen.

        super(props);           //A constructor can use the super keyword to call the constructor of the super class.
        this.state = {          //State is similar to props, but it is private and fully controlled by the component.
            username : null,
            password : null,
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        //this.onInputKeyUp = this.onInputKeyUp.bind(this);
    }
    
    userChange(e) {
        this.setState({ username : e.target.value});
    }
    
    passwordChange(e){
        this.setState({ password : e.target.value });
    }
    


    submit() {
        let text = {
                    userName:this.state.username,
                    passWord:this.state.password
        }                                           //获取数据
        let send = JSON.stringify(text);            //重要！将对象转换成json字符串
        
        console.log(send)
        //Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。
        fetch(`http://localhost:8080/login`,{       //Fetch方法与后端交互
            method: 'POST',                         //POST方法
            mode:"cors",                            //跨源请求
            headers: {'Content-Type': 'application/json; charset=utf-8'},       //向后端提交JSON
            body: send
        }).then(res => res.json())
          .then(
            data => {
                console.log(data);
                if(data.Status) {
                    window.alert('验证成功，欢迎登录');
                    this.props.history.push('/Main');
                }
                else window.alert('验证失败，用户名或密码错误');
            }
          )

   }
    
    

    onInputKeyUp(e){
        if(e.keyCode === 13) {
        this.submit();
        }
    }
 
    render() {
        return (
            <div style={{margin:'10px'}}>
                <Segment style={{textAlign:'center'}}>
                    <Input
                        id='user'
                        placeholder='Username'
                        style={{
                            marginBottom:'10px',
                        }}
                        onChange={this.userChange}
                    /><br/>
                    <Input
                        id='password'
                        type='password'
                        placeholder='Password'
                        style={{
                            marginBottom:'10px',
                        }}
                        onChange={this.passwordChange}
                    /><br/>
                </Segment>

                <Segment style={{textAlign:'center'}}>
                    <Button
                        primary
                        content='Sign in'
                        style={{
                            marginBottom:'10px',
                            width:'250px',
                            height:'40px',
                        }}
                        onClick={this.submit}
                    /><br/>
                    <Button
                        primary
                        content='Sign up'
                        style={{
                            marginBottom:'10px',
                            width:'250px',
                            height:'40px',
                        }}
                        onClick={this.register}
                    />
                </Segment>
            </div>
        )
}
}
export default Login;