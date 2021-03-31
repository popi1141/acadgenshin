import React from 'react'
import { Col } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
const characterImages = require.context('../assets/images/characters');
const weaponImages = require.context('../assets/images/weapons');
const characterIcons = require.context('../assets/images/details/character-icons');
export default function WishItem(props) {
  const { isNewItem, itemPercentX } = props
  const {src, name, rating, type} = props.item
  var element;
  if (props.item.element == undefined) {
    element = "placeholder";
  }
  else {
    element = props.item.element;
  }
  const isCharacter = type === 'character'
  //console.log(element);
  return (
    <Col
    xs="2"
    md="1"
    style={{
      backgroundImage: `url('${type === 'character' ? characterImages('./' + src).default : weaponImages('./' + src).default}')`,
      backgroundPositionX: itemPercentX+'%'
    }}
    className={`wish-item ${type} mx-1 px-0`}>
      {
        isNewItem && <span className="new-badge">New</span>
      }
      <div
      className="h-100 react-stars-container d-flex flex-column align-content-center justify-content-end pb-2">
        {
          isCharacter && <img src={characterIcons(`./${element}-Icon.png`).default} style={{width: '25%', marginLeft:'auto', marginRight:'auto'}}/>
        }
        <div className="text-center text-wrap pb-1">{name}</div>
        <ReactStars
          count={rating}
          size={12}
          edit={false}
          color="#ffd700"
          classNames={"justify-content-center"}
        />
      </div>
    </Col>
  )
}
