import React from 'react';
import MenuHome from './MenuHome';
import MenuRight from './MenuRight';
import SearchBar from './SearchBar';
import './index.scss';

class Top extends React.Component{
   render(){
       return(
            <div className='top'>
               <div className="top__left"><MenuHome /></div>
               <div className="top__right"><MenuRight /></div>
               <div className="top__search"><SearchBar /></div>
            </div>
        )
    }
}
export default Top
