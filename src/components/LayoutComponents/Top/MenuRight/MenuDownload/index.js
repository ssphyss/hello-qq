import React from 'react';
import { Menu, Dropdown, Card, Button } from 'antd';

class MenuDownload extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Card
                        title="下載"
                        extra={<a href="/">More</a>}       
                        className='dropdown__card dropdown__card--download'
                    >
                        <ul>
                            <li className='active'><i className="iconfont">&#xe616;</i>連續簽到搶VIP</li>
                            <li><i className="iconfont">&#xe732;</i>三倍流暢播放</li>
                            <li><i className="iconfont">&#xe66c;</i>1080P藍光畫質</li>
                            <li><i className="iconfont">&#xe613;</i>新劇提前看</li>
                        </ul>
                        <p className='btn-box'><Button>立即體驗</Button></p>
                    </Card>
                </Menu.Item>
                
            </Menu>
        )
        return(
            <Dropdown overlay={menu} /*visible={true}*/ placement="bottomRight">
                <div className='menuRight__item'>               
                    <i className="iconfont">&#xe639;</i>             
                    <span>下載客戶端</span>            
                </div>
            </Dropdown>
        )
     }
}
export default MenuDownload