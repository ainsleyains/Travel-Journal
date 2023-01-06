import React from 'react'


export default function Cards(props) {
    
    return (
        <section className='card'>
            <img className='imgs' src={`../imgs/${props.img}`} />
            <div className='content'>
                <div className='title'>
                    <img className='gps' src='../imgs/gps.png' />
                    <h4 className='location'>{props.location}</h4>
                    <a href={props.gps}>View on Google Maps</a>
                </div>
                <h1 className='header'>{props.title}</h1>
                <h6 className='date'>{props.startDate} - {props.endDate}</h6>
                <p className='text'>{props.description}</p>
            </div>
            <hr/>
        </section>
        
    )
}