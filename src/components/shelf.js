import {Shelf} from '../styles/custom.components'

export default function ShelfComponent(props) {
  
  const handleFavorite = () =>{
    
  }
  
  return (
    <Shelf>
            <img src={props.image} alt="Any" />
            <p>{props.name}</p>
            <StarOutlined onClick={handleFavorite}/>
            <StarFilled onClick={handleFavorite}/>
          </Shelf>
  );
}
