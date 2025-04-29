# Simple React Native Auto Scale Image

A lightweight TypeScript library that provides an auto-scaling image component for React Native applications. This component automatically scales images based on their actual aspect ratio, ensuring proper display without distortion.

## Features

- 🖼️ Automatic image scaling based on actual aspect ratio
- 📱 Optimized for React Native applications
- 💪 Written in TypeScript for better type safety
- 🪶 Lightweight implementation
- ⚡ Simple to integrate and use

## Installation

```bash
# Using npm
npm install simple-rn-auto-scale-image

# Using yarn
yarn add simple-rn-auto-scale-image
```

## Usage

```typescript
import AutoScaleImage from 'simple-rn-auto-scale-image';

const MyComponent = () => {
  return (
    <AutoScaleImage
      source={{ uri: 'https://example.com/image.jpg' }}
      width={300} // Desired width
    />
  );
};
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| source | ImageSourcePropType | Yes | The source of the image (uri or require) |
| width | number | Yes | The desired width of the image |
| style | ViewStyle | No | Additional styles for the image container |

## How It Works

The component automatically calculates the appropriate height based on the image's actual dimensions and the specified width, maintaining the original aspect ratio. This ensures that your images are displayed correctly without any stretching or distortion.

## Example

```typescript
import React from 'react';
import { View } from 'react-native';
import AutoScaleImage from 'simple-rn-auto-scale-image';

const Example = () => {
  return (
    <View style={{ flex: 1 }}>
      <AutoScaleImage
        source={{ uri: 'https://example.com/image.jpg' }}
        width={200}
        style={{ margin: 10 }}
      />
    </View>
  );
};

export default Example;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[hepiska](https://github.com/hepiska)

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/hepiska/simple-rn-auto-scale-image/issues) on GitHub.
