import React, { Component } from 'react'
import Menuitem from '../menu-item/Menuitem'
import './directory.styles.scss'

class Directory extends Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'man',
          imageUrl: 'https://static.zara.net/photos//mkt/spots/ss20-north-in-front-of-man/subhome-xmedia-mew-in//portrait_0.jpg?ts=1588678275867&amp;imwidth=1920',
          size: 'large',
          id: 5,
          linkUrl: 'ManPage'
        },
        {
          title: 'women',
          imageUrl: 'https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2020-04/30/Promo_Woman.jpg?v=20200509020501',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'accessory',
          // imageUrl: '  https://static.bershka.net/4/static/itxwebstandard/images/home/2020/0508/D_slide_woman_tops_-1.jpg?20200509020504',

          imageUrl: 'https://static.zara.net/photos//mkt/spots/aw20-north-shoes-bags-woman/subhome-xmedia-19//landscape_0.jpg?ts=1588696058506&amp;imwidth=1920',
          id: 1,
          linkUrl: 'accesory'
        },
        {
          title: 'jackets',
          imageUrl: 'https://static.zara.net/photos//mkt/spots/ss20-north-in-front-of-man/subhome-xmedia-stories//portrait_0.jpg?ts=1588678283400&amp;imwidth=1920',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'shoes',
          imageUrl: 'https://static.zara.net/photos//mkt/spots/ss20-north-in-front-of-man/subhome-xmedia-collection//landscape_0.jpg?ts=1588756391563&amp;imwidth=2880',
          id: 3,
          linkUrl: 'shoes'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          // this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <Menuitem key={id}  {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}
export default Directory