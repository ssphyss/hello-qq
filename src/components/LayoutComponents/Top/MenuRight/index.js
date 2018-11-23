import React from 'react';
import MenuHistory from './MenuHistory';
import MenuDownload from './MenuDownload';
import MenuProfile from './MenuProfile';
import './index.scss';

class MenuRight extends React.Component{
    render(){
        return(
            <div className='menuRight'>               
                <ul>
                    <li className='vip'>{/*vip*/}<i class="iconfont">&#xe616;</i>VIP</li>
                    <li>{/*看過*/}<i class="iconfont">&#xe60a;</i><MenuHistory /></li>
                    <li>{/*上傳*/}<i class="iconfont">&#xe64b;</i>上傳</li>
                    <li>{/*下載客戶端*/}<i class="iconfont">&#xe639;</i><MenuDownload /></li>
                    <li className='user'>{/*User*/}<i class="iconfont">&#xf130;</i><MenuProfile /></li>
                </ul>                
            </div>
        )
     }
}
export default MenuRight