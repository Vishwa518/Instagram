import {useSelector} from 'react-redux';

export const constants = () => {
  const selector = useSelector(state => state);
  backgroundColor = selector.color.color;
  tintColor = selector.color.tintColor;
};
