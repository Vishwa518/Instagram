import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const constants = () => {
  const selector = useSelector(state => state);
  const [bgColor, setBgColor] = useState(selector.color.color);
  const [tintColor, setTintColor] = useState(selector.color.tintColor);

  useEffect(() => {
    setBgColor(selector.color.color);
    setTintColor(selector.color.tintColor);
  }, [selector.color]);

  return {
    bgColor,
    tintColor,
  };
};
