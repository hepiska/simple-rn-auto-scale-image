import React from 'react';
import { View, Image, ImageProps } from 'react-native';

interface ImageType extends ImageProps {
  width?: number,
  height?: number,
}


const ImageAutoScale = ({source, width, height,...props}: ImageType) => {
      return <Image source={source} {...props} />
}

export default ImageAutoScale