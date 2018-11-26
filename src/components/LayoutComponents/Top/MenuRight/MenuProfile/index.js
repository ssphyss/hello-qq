import React from 'react';
import { Menu, Dropdown, Card, Button } from 'antd';

class MenuProfile extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Card
                        title="Profile"
                        extra={<a href="/">More</a>}    
                        className='dropdown__card dropdown__card--profile'
                    >
                        <p>登入之後可以</p>
                        <div className='box-flex'>
                            <span>開通VIP/超級影視VIP看大片</span>    
                            <button>開通</button>
                        </div> 
                        <ul>
                            <li><i className="iconfont">&#xe616;</i>V幣好禮</li>
                            <li><i className="iconfont">&#xe732;</i>雲同步觀看紀錄</li>
                            <li><i className="iconfont">&#xe66c;</i>免費抽獎</li>
                            <li><i className="iconfont">&#xe613;</i>用戶端看搶VIP</li>
                        </ul>
                        <p className='btn-box'><Button>立即登陸</Button></p>
                    </Card>
                </Menu.Item>                
            </Menu>
        )
        return(            
            <Dropdown overlay={menu} /*visible={true}*/ placement="bottomRight">
                <div className='menuRight__item user'> 
                    <i className="iconfont">&#xf130;</i> 
                </div>
            </Dropdown>
        )
    }
}
export default MenuProfile