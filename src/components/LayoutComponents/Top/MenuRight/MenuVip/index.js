import React from 'react';
import { Menu, Dropdown, Card } from 'antd';

class MenuVip extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Card
                        title="VIP"
                        extra={<a href="/">More</a>}
                        style={{ width: 300 }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Menu.Item>
                
            </Menu>
        )
        return(            
            <Dropdown overlay={menu} >
                <div className='menuRight__item vip'>   
                    <i className="iconfont">&#xe616;</i>             
                    VIP 
                </div>
            </Dropdown> 
        )
     }
}
export default MenuVip