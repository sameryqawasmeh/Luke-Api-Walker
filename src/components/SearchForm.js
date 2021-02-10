import React,{useState} from 'react'
import {navigate} from '@reach/router'

const SearchForm = () => {
    const [option,setOption]=useState("people");
    const [id,setId]=useState(1);
    const searchHandler=(e)=>{
        e.preventDefault();
        navigate(`/${option}/${id}`);
    }
    return (
        <div>
            <form onSubmit={searchHandler}>
                <select onChange={(e)=>setOption(e.target.value)}>
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                </select>
                <input type="number" onChange={(e)=>setId(e.target.value)}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchForm