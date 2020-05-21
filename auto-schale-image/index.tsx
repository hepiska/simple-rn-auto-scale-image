import React,{useState, useEffect} from 'react';
import { View, Image, ImageProps } from 'react-native';

interface ImageType extends ImageProps {
  width?: number,
  height?: number,
}


const ImageAutoScale = ({source, width,style, height,...props}: ImageType) => {

  const [dim, setDim] = useState(null) as any
  let isMounted = true
    const calculateDimensions = (newWidth: number, newHeight: number) => {
    if (width && height) {
      return setDim({ width, height })
    }
    if (!width && !height) {
      return setDim( { width: newWidth, height: newHeight } )
    }
    if (!height) {
      const height = Number(newHeight)
        ? Math.floor((width as number) * (newHeight / newWidth))
        : width
      return setDim({
          width,
          height,
      })
    }
    if (!width) {
      return setDim( { width: height * (newWidth / newHeight), height 
      })
    }
  }

  useEffect(() => {
    // handle http source image
      if((source as any).uri ){
          Image.getSize((source as any).uri,(newWidth, newHeight) => {
            //  stop calculation when component unmouted

            if (!isMounted) {
              return
            }

            calculateDimensions(newWidth, newHeight)
          },(error) => {})
      }else if(source){
        // handle require local image
        const { width: newWidth, height: newHeight } = Image.resolveAssetSource(
          source,
        )
        if (!isMounted) {
          return
        }
        calculateDimensions(newWidth, newHeight)
      }
      return () => {
          isMounted = false
      }
  },[])
  

  console.log(dim)

    if(dim) {
      return <Image source={source} style={{ ...(style as object), height:dim.height, width:dim.width}} {...props} />

    } 
    return null
  }

      

export default ImageAutoScale