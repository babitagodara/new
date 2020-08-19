import React from 'react';


const  Babitalist =(props)=> {
    return(
        <div className="Babitastyle ma3 bg-light-purple dib pa3 grow shadow-4 tc" >
        <img src= {`https://joeschmoe.io/api/v1/${props.name}`} alt= "Babita"/>
        <h1 className="">{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}
export default Babitalist;