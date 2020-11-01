import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1598550931&w=1400&h=950"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className = "swipe"
                        key = {person.name}
                        preventSwipe = {["up", "down"]}
                        onSwipe = { (dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}>                
        
                        <div style = {{ backgroundImage: "url(" + person.url + ")"}} className = "card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
