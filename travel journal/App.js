import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import data from './data'

export default function App() {
    const card = data.map(ele=>{
        return (
          <Cards 
            key={ele.id}
            img={ele.image}
            location={ele.location}
            gps={ele.googleMapsUrl}
            title={ele.title}
            startDate={ele.startDate}
            endDate={ele.endDate}
            description={ele.description}
            
        />
        )
    })
    return (
        <div className='container'>
            <Header />
            <section className='cards-list'>
                {card}
                
            </section>
        </div>
    )
}