import React, { useState } from "react";

import './ClickBtn.css'


const ClickBtn = () =>{
    const  ffData =  [
        {
            id : 1,
            name : 'Yugal',
            surname : 'Kumbhare',
            ffid : 'Dr.AlluArjun'
        },
        {
            id : 2,
            name : 'Bhavik',
            surname : 'Kumbhare',
            ffid : 'Stylish_BK'
        },
        {
            id : 3,
            name : 'Om',
            surname : 'Nikam',
            ffid : 'Army@02'
        },
        {
            id : 4,
            name : 'Vivek',
            surname : 'Patil',
            ffid : 'Gujjar_DON'
        },
        {
            id : 5,
            name : 'Rohan',
            surname : 'Choudhary',
            ffid : 'BlueHulk'
        }
    ]
    const [data, setData] = useState(ffData);

    const clearData = () =>{
        setData([]);
    }
    const delData = (id) =>{
        const notDeleteData = data.filter((ele) => {
            return ele.id !== id;
        });
        setData(notDeleteData)
    }
    return (
        <>
        <h1 className="heading">FF  Pro  Player</h1>
            {
                data.map((curElm) => {
                    return(
                        <div className="flex"> 
                            <span className="design">ID : {curElm.id}</span>
                            <span className="design margin_left">Name : {curElm.name}</span>
                            <span className="design margin_left">SurName : {curElm.surname}</span>
                            <span className="design margin_left">FF ID : {curElm.ffid}</span>
                            <button className="design left" onClick={() => delData(curElm.id)}>Remove</button>
                        </div>
                    )
                })
            }   
            <button className="clear" onClick={clearData}>Clear</button>
        </>
    );
}

export default ClickBtn;