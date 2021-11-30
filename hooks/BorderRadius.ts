import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");
export function roundOff(v: number) {
  return Math.round(v);
}

export function dimensions() {
  var _borderRadius = roundOff((height + width) / 2),
    _height = roundOff(height),
    _width = roundOff(width);

  return { _borderRadius, _height, _width };
}