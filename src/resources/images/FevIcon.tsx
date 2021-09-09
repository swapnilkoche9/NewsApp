import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  height?: number;
  width?: number;
}

function FavIcon({ color = '#66a3ff', width, height }: Props) {
  return (
    <Svg width={width || 24} height={height || 24}>
      <Path
        fill={color}
        d="M12 4.419C9.174-1.276.001.355.001 7.689.001 14.959 9.904 18.627 12 23c2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"
      />
    </Svg>
  );
}

export default FavIcon;
