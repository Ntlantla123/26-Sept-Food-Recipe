import React, { useEffect, useState,value } from 'react'
import './Search.css';
export default function Search() {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFilterData(data);
            })
            .catch(err => console.log(err));
    }, [])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res);
    }
    return (
        <div className="wrapper-search">
            <div className="search-top">
                <div className="search">
                    <input type="text" placeholder="Search Here..." onChange={e => handleFilter(e.target.value)} />
                </div>
                <div className="search-result">
                    {data.map((d, i)=> (
                        <div key={i}>
                            {d.name}
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
