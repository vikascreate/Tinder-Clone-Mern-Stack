import axios from './axios';
import React from 'react';
import TinderCard from 'react-tinder-card';
import { Navigate } from 'react-router';
import './TinderCards.css'
function TinderCards(props) {
    const [people,setPeople]=React.useState([])
    const token=localStorage.getItem('tinderuser')
    React.useEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/tinder/card')
            setPeople(req.data)
        }
        fetchData()
    },[])
    const swiped=(dir,nameToDel) =>{
        console.log("removing:"+nameToDel)
       // setLastDir(dir)
    }
    const outOfFrame=(name) =>{
        console.log(name +"left")
    }
    return (
        <div className='tinderCards'>
             {!token && <Navigate to='/'/>}
        <div className="tinderCards__cardContainer">
            {people.map((person)=>(
               <TinderCard
                 className='swipe'
                 key={person.id}
                 preventSwipe={['up','down']}
                 onSwipe={(dir) =>swiped(dir,person.name)}
                 onCardLeftScreen={()=> outOfFrame(person.name)}>
                    <div style={{backgroundImage:`url(${person.imgUrl})`}}
                    className="tindercardsA">
                        <h3>{person.name}</h3>
                    </div>
                 </TinderCard>
        ))}
        </div>  
        </div>
    );
}

export default TinderCards;