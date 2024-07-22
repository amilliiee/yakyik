# YikYak Clone - Frontend

A simple React Native application that mimics the front-end functionality of the YikYak app. This project includes features for displaying posts with optional profile pictures, creating new posts, and viewing post details.

## Features

- Display posts in a list format.
- Show profile pictures for each post. If no profile picture is provided, a placeholder with the user's initial is shown.
- View post content.
- Navigate between different screens (e.g., Home, Create Post, Profile, Comments).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/yikyak-clone-frontend.git
   cd yikyak-clone-frontend
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/en) and [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) installed.
   
  ```bash
  yarn install
  ```
  or

  ```bash
  npm install
  ```

4. **Set Up React Native Environment**

   Follow the official [React Native documentation](https://reactnative.dev/docs/set-up-your-environment) to set up the development environment for iOS and Android.

## Running the App

1. **Start the Metro Bundler**

  ```bash
  yarn start
  ```
  or

  ```bash
  npm start
  ```

3. **Run on iOS Simulator**

  ```bash
  yarn ios
  ```
  or
   
  ```bash
  npm run ios
  ```

5. **Run on Android Emulator**

  ```bash
  yarn android
  ```
   
  or

  ```bash
  npm run android
  ```

## Folder Structure

- `src/`: Contains the source code for the project.
  - `components/`: Reusable components, e.g., `ProfilePicture.js`.
  - `screens/`: Screen components for different views, e.g., `HomeScreen.js`
  - `navigation/`: Navigation setup and configuration, e.g., `AppNavigator.js`
  - `styles/`: Common styles (if applicable)
 
## Usage

- `PostList.js`: Displays a list of posts with optional profile pictures and content.
- `ProfilePicture.js`: Displays the profile picture or a placeholder with the user's initial.
- `AppNavigator.js`: Manages navigation between different screens.

## License

This project is licensed under the MIT License - see the [LICENSE]() file for details.

















