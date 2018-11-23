import React from 'react';
import './index.scss';

class SearchBar extends React.Component{
    render(){
        return(
            <div className='search'>
                <input placeholder='超星雲全運會 第1季'/>
                <button className='btn-hot'>熱搜榜</button>
                <button className='btn-search'>全網搜</button>
            </div>
        )
     }
}
export default SearchBar