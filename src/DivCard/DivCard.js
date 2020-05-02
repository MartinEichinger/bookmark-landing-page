/*
this.propsDiv = {
  name: 'divBookmarkManager',
  nav: '',
  isBtn: 'button',
  imgSrc: './images/illustration-hero.svg',
  h1Txt: 'A Simple Bookmark Manager',
  pTxt: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
  btn: [{
          txt: 'Get it on Chrome',
          link: '#',
          img: ''
        },
        {
          txt: 'Get it on Firefox',
          link: '#',
          img: ''
        },
  ]
};
*/

import React from 'react';
import './DivCard.scss';

export function DivCard(props) {
  console.log('DivCard: ',props);
  let blockName = `block${props.propsDiv.nav}`;
  let flipCard = `flip-card ${props.propsDiv.name}`
  let flipCardBack = `flip-card-back`;
  return (
    <div className={flipCard}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="blockImg">
            
          </div>
        </div>
        <div className={flipCardBack}>
          <div className="blockImg">
            <img src={props.propsDiv.imgSrc} alt="" />
          </div>
          <div className={blockName} id={props.propsDiv.nav}>
            <div className="h1">
              {props.propsDiv.h1Txt}
            </div>
            <div className="p">
              {props.propsDiv.pTxt}
            </div>
            <div className="blockButton">
              <p>{props.propsDiv.btn[0].txt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
