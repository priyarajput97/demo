// To avoid excessive ternary operations and keep things clean when dealing with multiple button colors (like **red**, **gray**, or others) and their corresponding **color combinations**, you can take advantage of **custom theming** in React Native Paper. This allows you to define **color sets** for each type of button (e.g., contained and outlined modes for red, gray, blue buttons) directly in the theme.

// ### Solution: Centralize Button Variants in the Theme

// You can create a **custom button variant system** inside your theme where each button type (e.g., primary, secondary, error) has predefined styles for both **contained** and **outlined** modes. This way, you only define the styles once in the theme, and your `ButtonComponent` can reference them without requiring multiple ternary operations.

// ### Step-by-Step Approach:

// 1. **Extend the theme to handle multiple button color combinations**.
// 2. **Define contained and outlined styles for each button color** in the theme.
// 3. **Retrieve styles dynamically** in the button component based on the button’s color and mode.

// ### 1. **Extended Theme with Custom Button Variants**

// Here's how you can set up a theme where you define custom styles for each button variant:

// ```javascript
// import * as React from 'react';
// import { Provider as PaperProvider, Button, useTheme } from 'react-native-paper';
// import { StyleSheet } from 'react-native';

// // Define your extended theme with button variants
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     primary: '#6200ee',
//     onPrimary: '#ffffff',
//     secondary: '#03dac6',
//     onSecondary: '#000000',
//     error: '#B00020',
//     onError: '#ffffff',
//     grey: '#808080',  // Grey button
//     onGrey: '#000000',
//     red: '#ff0000',  // Red button
//     onRed: '#ffffff',
//     rippleGray: '#D3D3D3',
//   },
//   roundness: 4,
//   // Define custom button variants
//   customButtonVariants: {
//     primary: {
//       contained: {
//         backgroundColor: '#6200ee',
//         textColor: '#ffffff',
//         borderColor: 'transparent',
//         rippleColor: '#bb86fc',  // Light purple
//       },
//       outlined: {
//         backgroundColor: 'transparent',
//         textColor: '#6200ee',
//         borderColor: '#6200ee',
//         rippleColor: '#D3D3D3',  // Gray ripple
//       },
//     },
//     grey: {
//       contained: {
//         backgroundColor: '#808080',
//         textColor: '#ffffff',
//         borderColor: 'transparent',
//         rippleColor: '#A9A9A9',  // Dark grey ripple
//       },
//       outlined: {
//         backgroundColor: 'transparent',
//         textColor: '#808080',
//         borderColor: '#808080',
//         rippleColor: '#D3D3D3',  // Gray ripple
//       },
//     },
//     red: {
//       contained: {
//         backgroundColor: '#ff0000',
//         textColor: '#ffffff',
//         borderColor: 'transparent',
//         rippleColor: '#ff9999',  // Light red ripple
//       },
//       outlined: {
//         backgroundColor: 'transparent',
//         textColor: '#ff0000',
//         borderColor: '#ff0000',
//         rippleColor: '#D3D3D3',  // Gray ripple
//       },
//     },
//   },
// };
// ```

// In this theme, each button color (primary, grey, red) has both **contained** and **outlined** variants defined with their respective background colors, text colors, border colors, and ripple effects.

// ### 2. **Reusable ButtonComponent** with Clean Logic**

// Next, you create a button component that pulls the styles dynamically from the theme based on the `color` and `mode` props:

// ```javascript
// const ButtonComponent = ({ color = 'primary', size = 'medium', mode = 'contained', icon, onPress, children }) => {
//   const theme = useTheme(); // Access the theme

//   // Get the variant styles from the theme
//   const variant = theme.customButtonVariants[color][mode];

//   // Define button sizes
//   const buttonSizes = {
//     small: {
//       paddingVertical: 6,
//       paddingHorizontal: 12,
//       fontSize: 8,
//     },
//     medium: {
//       paddingVertical: 8,
//       paddingHorizontal: 16,
//       fontSize: 12,
//     },
//     large: {
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       fontSize: 16,
//     },
//   };

//   return (
//     <Button
//       mode={mode}
//       icon={icon}
//       onPress={onPress}
//       theme={{
//         colors: {
//           primary: variant.backgroundColor, // Set the background color
//           onPrimary: variant.textColor,     // Set the text color
//         },
//       }}
//       style={{
//         borderWidth: mode === 'outlined' ? 1 : 0,
//         borderColor: variant.borderColor,  // Set the border color for outlined buttons
//         backgroundColor: variant.backgroundColor, // Set background for contained
//       }}
//       contentStyle={{ ...buttonSizes[size] }}  // Set size dynamically
//       labelStyle={{ fontSize: buttonSizes[size].fontSize, color: variant.textColor }}  // Text color
//       rippleColor={variant.rippleColor}  // Custom ripple color from theme
//     >
//       {children}
//     </Button>
//   );
// };
// ```

// ### 3. **Usage in the App**

// Now, when you use the `ButtonComponent`, you can specify the color (`primary`, `red`, or `grey`), size, and mode, and it will automatically apply the correct styles from the theme.

// ```javascript
// export default function App() {
//   return (
//     <PaperProvider theme={theme}>
//       <ButtonComponent
//         color="primary"
//         size="medium"
//         mode="contained"
//         onPress={() => console.log('Contained Primary Button')}
//       >
//         Contained Primary
//       </ButtonComponent>

//       <ButtonComponent
//         color="grey"
//         size="medium"
//         mode="outlined"
//         onPress={() => console.log('Outlined Grey Button')}
//       >
//         Outlined Grey
//       </ButtonComponent>

//       <ButtonComponent
//         color="red"
//         size="large"
//         mode="contained"
//         onPress={() => console.log('Contained Red Button')}
//       >
//         Contained Red
//       </ButtonComponent>

//       <ButtonComponent
//         color="red"
//         size="large"
//         mode="outlined"
//         onPress={() => console.log('Outlined Red Button')}
//       >
//         Outlined Red
//       </ButtonComponent>
//     </PaperProvider>
//   );
// }
// ```

// ### Benefits:

// - **No Ternary Operations**: You don't need to use any ternary logic for each button color combination. Everything is centralized in the theme.
// - **Maintainability**: If you need to change the color, ripple, or border style for a button, you just update the theme, and it will automatically apply to all buttons in the app.
// - **Scalability**: You can easily add more button types or other components (like chips or text fields) that rely on the same theme structure.
// - **Custom Sizes**: The button sizes (`small`, `medium`, `large`) are also centralized, making it easy to scale them across the app.

// ### Summary:

// By defining all button styles and color combinations in the **theme** (both for contained and outlined modes), your `ButtonComponent` stays clean and avoids repetitive logic. This also allows for easy scaling when new components or design changes are introduced, ensuring the theming system is robust and maintainable.