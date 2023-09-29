import React from 'react'
import './Suggestion.css'
import { Avatar } from "@mui/material";

const Suggestion = () => {
  
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
            <Avatar></Avatar> 
            </span>
            <div className="username__info">
              <span className="username">Zoroo_</span><br/>
              <span className="relation">15 Mutual friends</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">coco</span><br/>
              <span className="relation">From your contacts</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">Monkey_D_Luffy</span><br/>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar></Avatar>
            </span>
            <div className="username__info">
              <span className="username">itachi_</span><br/>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestion