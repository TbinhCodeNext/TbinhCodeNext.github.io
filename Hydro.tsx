import React from "react"
import './App.css';
import {Link} from 'react-router-dom';
export class Hydro extends React.Component {
    render() {
        return <div> <h1>Welcome to the Genshin Impact Fanpage (Unoffical version)! </h1> 
        <h5>In the following pages, you will learn about different the Genshin Impact characters, 
            and there will be a forum for you to partcipate in.
             </h5><p><img src="https://media.discordapp.net/attachments/727960210534301727/849435214363099166/2021414183557.png?width=629&height=354"></img></p> 
             
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
             </div>
    }
}