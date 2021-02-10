import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Planets = (props) => {
    const [planets,setPlanets]=useState('')
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((res)=>setPlanets(res.data))
        .catch((err)=>console.log(err))
    },[props.id])
    return (
        <div>
            <h3>{planets.name}</h3>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {(planets.surface_water==1)?<span>True</span>:<span>False</span>}</p>
        </div>
    )
}

export default Planets