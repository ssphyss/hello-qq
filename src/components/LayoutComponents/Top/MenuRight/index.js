import React from 'react';
import MenuVip from './MenuVip';
import MenuHistory from './MenuHistory';
import MenuUpload from './MenuUpload';
import MenuDownload from './MenuDownload';
import MenuProfile from './MenuProfile';
import './index.scss';

class MenuRight extends React.Component{
    render(){
        return(
            <div className='menuRight'>    
                <MenuVip />            
                <MenuHistory />
                <MenuUpload />    
                <MenuDownload />  
                <MenuProfile />                         
                <ul>             
                    {/*vip*/}      
                    {/* <li className='vip'><i className="iconfont">&#xe616;</i>VIP</li> */}
                    {/*看過*/}
                    {/* <li><i className="iconfont">&#xe60a;</i><MenuHistory /></li> */}
                    {/*上傳*/}
                    {/* <li><i className="iconfont">&#xe64b;</i>上傳</li> */}
                    {/*下載客戶端*/}
                    {/* <li><i className="iconfont">&#xe639;</i><MenuDownload /></li> */}
                    {/*User*/}
                    {/* <li className='user'><i className="iconfont">&#xf130;</i><MenuProfile /></li> */}
                </ul>                
            </div>
        )
     }
}
export default MenuRight