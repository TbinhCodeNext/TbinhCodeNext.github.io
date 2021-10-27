import React from "react"
import './App.css';
import {Link} from 'react-router-dom';
export class Cryo extends React.Component {
    render() {
        return <div className="cryoCharacs"> 
                <div> 
                <h3 className="textos"> Character 1: Chongyun (Chinese: 重云 Chóngyún, "Layers of Clouds"): <br/>
                <br/>
                    An exorcist from Liyue, Chongyun was born with excessive yang (positive) energy, which has proven to be 
                    both a help and a hindrance. It makes him a very effective exorcist, but it also means he has never seen 
                    a spirit for himself — they flee before he can even lay eyes on them. It has also made him particularly 
                    susceptible to any kind of heat or strong emotion, which leads to some rather... unexpected results. </h3> 
                    <div> <img src="https://i.redd.it/8h5g8ht05tu51.jpg" className="imgs"></img> </div> </div>

                    <br/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <br></br>
             
            <Link to= "/cryo"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448612316315698/cryo.png" 
             className = "cryo" /> </Link>
             <Link to= "/hydro"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448606385438760/hyro.png" 
             className = "hydro" /> </Link>
             <Link to= "/electro"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448608918798356/electro.png" 
             className = "electro" /></Link>
             <Link to= "/pyro"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448604917563403/pyro.png" 
             className = "pyro" /></Link>
             <Link to= "/geo"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448607824347177/geo.png" 
             className = "geo" /></Link>
             <Link to= "/anemo"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448612642422784/anemo.png" 
             className = "anemo" /></Link>
             <Link to= "/dendro"> <img src= "https://cdn.discordapp.com/attachments/727960210534301727/849448610815017000/dendro.png" 
             className = "dendro" /></Link>
             <Link to= "/bio"> <img src= "https://cdn.discordapp.com/emojis/795822470070403092.gif" 
             className = "bio" /></Link>
             <Link to= "/forum"> <img src= "https://cdn.discordapp.com/attachments/727933614939177051/852743875662577684/love-letter-facebook.png" 
             className = "forum" /></Link>
             </div>
    }
}