import React from 'react';
import MenuRight from './MenuRight';
import SearchBar from './SearchBar';
import logo from './../../../assets/logo.png';
import './index.scss';

class Top extends React.Component{
   render(){
       return(
            <div className='top'>
                <div className="container">
                    <div className="top__left">
                        <img className='logo' src={logo} alt="logo" /> 
                    </div>
                    <div className="top__right"><MenuRight /></div>
                    <div className="top__search"><SearchBar /></div>
                </div>                
            </div>
        )
    }
}
export default Top
