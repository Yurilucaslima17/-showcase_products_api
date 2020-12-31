import { Shelf } from '../styles/custom.components';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export default function ShelfComponent(props) {
  const hasFavorites = localStorage.getItem('favorites');

  if (hasFavorites) {
    const favorites = JSON.parse(localStorage.getItem('favorite'));
  }

  const handleFavorite = () => {
    localStorage.setItem('favorite', JSON.stringify({ ...props }));
  };

  return (
    <Shelf>
      <img src={props.image} alt="Any" />
      <p>{props.name}</p>
      <StarOutlined onClick={handleFavorite} />
      <StarFilled onClick={handleFavorite} />
    </Shelf>
  );
}
