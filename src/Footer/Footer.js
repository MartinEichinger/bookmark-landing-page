/*
propsFooter = {
    footerImg: './images/icon-phone.svg',
    block11Img: './images/icon-phone.svg',
    block11Txt1: 'Phone: +1-543-123-4567',
    block12Img1: './images/icon-phone.svg',
    block12Txt1: 'Phone: +1-543-123-4567',
    block12Img2: './images/icon-email.svg',
    block12Txt2: 'example@fylo.com',
    block13Txt: [{
                  type: 'footer1',
                  name: 'About Us',
                  link: '#'
                },
                {
                  type: 'footer1',
                  name: 'Press',
                  link: '#'
                },
                {
                  type: 'footer1',
                  name: 'Blog',
                  link: '#'
                }],
    block14Txt: [{
                  type: 'footer2',
                  name: 'Contact Us',
                  link: '#'
                },
                {
                  type: 'footer2',
                  name: 'Terms',
                  link: '#'
                },
                {
                  type: 'footer2',
                  name: 'Privacy',
                  link: '#'
                }],
    block15Img: [{
                  type: 'footer3',
                  name: '',
                  img: './images/icon-facebook.svg',
                  link: ''
                },
                {
                  type: 'footer2',
                  name: '',
                  img: './images/icon-instagram.svg',
                  link: ''
                },
                {
                  type: 'footer2',
                  name: '',
                  img: './images/icon-twitter.svg',
                  link: ''
                }],}
*/

import React from 'react';
import './Footer.scss';

function renderSortByItems(props) {
  console.log('Footer/renderSortByItems: ',props);
  return props.map((item, i) => {
    let renClass = `${item.link}-${i}`;
    return <a href={item.link} className={renClass} key={i}><img src={item.img} alt='' />{item.name}</a>;
  });
}

export function Footer(props) {
  console.log(props);
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={props.propsDiv.footerImg} alt="" />
      </div>
      <div className="block">
        <div className="block11">
          <img src={props.propsDiv.block11Img} alt="" />
          <p>{props.propsDiv.blockk11Txt1}</p>
        </div>
        <div className="block12">
          <div>
            <img src={props.propsDiv.block12Img1} alt="" />
            <p>{props.propsDiv.block12Txt1}</p>
          </div>
          <div>
            <img src={props.propsDiv.block12Img2} alt="" />
            <p>{props.propsDiv.block12Txt2}</p>
          </div>
        </div>
        <div className="block13">
          {renderSortByItems(props.propsDiv.block13Txt)}
        </div>
        <div className="block14">
          {renderSortByItems(props.propsDiv.block14Txt)}
        </div>
        <div className="block15">
          {renderSortByItems(props.propsDiv.block15Img)}
        </div>
      </div>
    </div>
  );
}
