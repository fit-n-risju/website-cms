import React from 'react'
import "./DetailSelector.css"


const DetailSelector = () => (
<div className="detail-selector">
  <div className="content">
  <div className="detail-row">
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/apple.png" alt="t shirt icon" />
      <div className="mobile-column">
      <h1>HEALTHY LIFESTYLE</h1>
      <p>Learn more about why we love our vegan and fit lifestyle.</p>
      </div>
      </div>
      <a className="button select-button" id="detail1" href="./lifestyle/">Learn more</a>
    </div>
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/fitness.png" alt="love icon" />
      <div className="mobile-column">
      <h1>FITNESS FIRST</h1>
      <p>Be your best self with our favorite exercises and the coolest gear!</p>
      </div>
      </div>
      <a className="button select-button" id="detail2" href="./fitness/">Learn more</a>
    </div>
    <div className="detail-column">
      <div className="column-left">
      <img className="select-icon" src="/img/food.png" alt="food icon" />
      <div className="mobile-column">
      <h1>YUMMY RECIPES</h1>
      <p>Make your own power food: vegan, gluten free, and yummy!</p>
      </div>
      </div>
      <a className="button select-button" id="detail3" href="./recipes/">Learn more</a>
    </div>
  </div>
</div>
</div>
)

export default DetailSelector