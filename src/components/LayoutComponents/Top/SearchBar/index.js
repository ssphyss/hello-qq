import React from 'react';
import { Dropdown, Menu, Card } from 'antd';
import './index.scss';

class SearchBar extends React.Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item>
                    <Card
                        title="Card title"
                        extra={<a href="/">More</a>}
                        // style={{ width: '80%' }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Menu.Item>
            </Menu>
        )
        return(
            <div className='search'>
                <Dropdown overlay={menu} >
                    <input placeholder='超星雲全運會 第1季'/>
                </Dropdown>
                <button className='btn-hot'>熱搜榜</button>
                <button className='btn-search'>全網搜</button>                
            </div>
        )
     }
}
export default SearchBar