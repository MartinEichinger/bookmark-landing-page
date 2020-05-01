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
import './DivTxtTabs.scss';
import {DivPctTxtButton} from '../DivPctTxtButton/DivPctTxtButton';


export class DivTxtTabs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeTab: 'tabs-0'
    }

    this.handleTabChange = this.handleTabChange.bind(this);
    this.renderSortByItems = this.renderSortByItems.bind(this);
  }

  getSortByClass(sortByOption) {
     return this.state.activeTab === sortByOption ? 'active': '';
  }

  handleTabChange(activeTabs) {
    this.setState({
      activeTab: activeTabs
    });
  }

  renderSortByItems() {
    console.log('DivTxtTabs/renderSortByItems');

    return this.props.propsDiv.tabs.map((item, i) => {
      let renClass = `tabs tabs-${i} ${this.getSortByClass(`tabs-${i}`)}`;
      return <p onClick={() => this.handleTabChange(`tabs-${i}`)} className={renClass} key={i}><img src={item.img} alt='' />{item.txt}</p>;
    });
  }

  render() {
    let blockName = `block${this.props.propsDiv.nav}`;
    return (
      <div className={this.props.propsDiv.name}>
        <div className={blockName} id={this.props.propsDiv.nav}>
          <div className="h1">
            {this.props.propsDiv.h1Txt}
          </div>
          <div className="p">
            {this.props.propsDiv.pTxt}
          </div>
          <div className="blockTabs">
            {this.renderSortByItems()}
          </div>
          {this.state.activeTab === 'tabs-0' &&
            <DivPctTxtButton propsDiv={this.props.propsTab[0]} />
          }
          {this.state.activeTab === 'tabs-1' &&
            <DivPctTxtButton propsDiv={this.props.propsTab[1]} />
          }
          {this.state.activeTab === 'tabs-2' &&
            <DivPctTxtButton propsDiv={this.props.propsTab[2]} />
          }
        </div>
      </div>
    );
  }
}
