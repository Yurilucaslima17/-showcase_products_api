import { Row } from 'antd';
import Shelf from './shelf';

export default function Grid(props) {
  return (
    <div>
      {props.results.map((item) => {
        <Shelf {...item} />;
      })}
    </div>
  );
}
