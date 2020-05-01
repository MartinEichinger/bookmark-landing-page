import React from 'react';
//import logo from '../logo.svg';
import './App.scss';
import {Nav} from '../Nav/Nav';
import {Footer} from '../Footer/Footer';
import {DivPctTxtButton} from '../DivPctTxtButton/DivPctTxtButton';
import {DivTxtTabs} from '../DivTxtTabs/DivTxtTabs';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.propsNav = {
      imgSrc: "./images/logo-bookmark.svg",
      items: [{
                name: 'Features',
                link: '#features'
              },
              {
                name: 'Pricing',
                link: '#team'
              },
              {
                name: 'Contact',
                link: '#signIn'
              },
              {
                name: 'Login',
                link: '#'
              }]
    };

    this.propsFooter = {
        footerImg: './images/logo-bookmark-white.svg',
        block11Img: '',
        block11Txt1: '',
        block12Img1: '',
        block12Txt1: '',
        block12Img2: '',
        block12Txt2: '',
        block13Txt: [{
                      type: 'footer1',
                      name: '',
                      link: ''
                    },
                    {
                      type: 'footer1',
                      name: '',
                      link: ''
                    },
                    {
                      type: 'footer1',
                      name: '',
                      link: ''
                    }],
        block14Txt: [{
                      type: 'footer2',
                      name: 'Features',
                      link: '#'
                    },
                    {
                      type: 'footer2',
                      name: 'Prices',
                      link: '#'
                    },
                    {
                      type: 'footer2',
                      name: 'Contact',
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
                    }],};

    this.propsBookmarkManager = {
      name: 'divBookmarkManager',
      nav: 'Bookmark',
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

    this.propsFeatures = {
      name: 'divFeatures',
      nav: 'Features',
      h1Txt: 'Features',
      pTxt: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
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

    this.propsFeaturesTabs = [
      {
        name: 'divFeaturesTabsI',
        nav: 'Feature',
        isBtn: 'button',
        imgSrc: './images/illustration-hero.svg',
        h1Txt: 'Bookmark in one click',
        pTxt: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        btn: [{
                txt: 'More Info',
                link: '#',
                img: ''
              }
        ]
      },
      {
        name: 'divFeaturesTabsII',
        nav: 'Feature',
        isBtn: 'button',
        imgSrc: './images/illustration-features-tab-2.svg',
        h1Txt: 'Intelligent search',
        pTxt: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        btn: [{
                txt: 'More Info',
                link: '#',
                img: ''
              }
        ]
      },
      {
        name: 'divFeaturesTabsIII',
        nav: 'Feature',
        isBtn: 'button',
        imgSrc: './images/illustration-features-tab-3.svg',
        h1Txt: 'Share your bookmarks',
        pTxt: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        btn: [{
                txt: 'More Info',
                link: '#',
                img: ''
              }
        ]
      },
    ];

    this.handleGetStarted = this.handleGetStarted.bind(this);
  }

  handleGetStarted(event) {
    alert('Letz get started');
  }

  render() {
    return (
      <div className="App">
        <Nav propsDiv={this.propsNav} />
        <DivPctTxtButton propsDiv={this.propsBookmarkManager} />
        <DivTxtTabs propsDiv={this.propsFeatures} propsTab={this.propsFeaturesTabs} />
        <Footer propsDiv={this.propsFooter} />
      </div>
    );
  }
}

export default App;
