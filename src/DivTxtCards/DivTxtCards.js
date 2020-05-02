/*
this.propsDiv = {
  name: 'divBookmarkManager',
  nav: 'Features',
  h1Txt: 'A Simple Bookmark Manager',
  pTxt: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
  tabs: [{
          txt: 'Simple Bookmarking',
          link: '',
          img: ''
        },
        {
          txt: 'Speedy Searching',
          link: '',
          img: ''
        },
        {
          txt: 'Easy Sharing',
          link: '',
          img: ''
        }
  ]
};
*/

import React from 'react';
import './DivTxtCards.scss';
import {DivCard} from '../DivCard/DivCard';


export function DivTxtCards(props) {
  let blockName = `block${props.propsDiv.nav}`;
  return (
    <div className={props.propsDiv.name}>
      <div className={blockName} id={props.propsDiv.nav}>
        <div className="h1">
          {props.propsDiv.h1Txt}
        </div>
        <div className="p">
          {props.propsDiv.pTxt}
        </div>
        <div className="cards">
          <DivCard propsDiv={props.propsCards[0]} />
          <DivCard propsDiv={props.propsCards[1]} />
          <DivCard propsDiv={props.propsCards[2]} />
        </div>
      </div>
    </div>
  );
}
