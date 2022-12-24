import React, { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desing",
      title: "Desing",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {
            list.map((item)=>(
              <PortfolioList
               title={item.title}
               active={selected === item.id}
               setSelected={setSelected}
               id={item.id}
             />
            ))
          }
        </ul>
        <div className="container">
        <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/109f6d58b9590d4f8b2cc9a94aa97331e8d08087-1600x1200.jpg?w=1600&h=1200&auto=format" alt="" />
            <h3>Banking App</h3>
          </div>
        </div>
    </div>
  )
}
