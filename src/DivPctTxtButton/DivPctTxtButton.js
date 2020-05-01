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
import './DivPctTxtButton.scss';

function renderSortByItems(props) {
  console.log('DivPctTxtButton/renderSortByItems: ',props);
  return props.map((item, i) => {
    let renClass = `button`;
    return <a href={item.link} className={renClass} key={i}><img src={item.img} alt='' />{item.txt}</a>;
  });
}

export function DivPctTxtButton(props) {
  console.log('DivPctTxtButton: ',props);
  let blockName = `block${props.propsDiv.nav}`;
  return (
    <div className={props.propsDiv.name}>
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
          {renderSortByItems(props.propsDiv.btn)}
        </div>
      </div>
    </div>
  );

}
