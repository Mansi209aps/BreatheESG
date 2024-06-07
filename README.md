# BREATHE ESG Frontend Assignment

## Project Overview

This project is the frontend assignment for BREATHE ESG. The main objectives were to create a user interface based on the provided Figma design, implement Google authentication using Firebase, and deploy the application on Vercel.

![image](https://github.com/Mansi209aps/BreatheESG/assets/78530251/bcc79d87-ca55-464f-a496-ee184cdc97f6)

![image](https://github.com/Mansi209aps/BreatheESG/assets/78530251/7e1473ee-5b97-4711-a425-b9a25fd72b67)

## You can view the deployed project here: <a href="https://breathe-esg-assignment-beta.vercel.app/">BREATHE ESG Assignment</a>

## Features

- **Responsive UI**: The user interface is designed to be fully responsive, adapting to various screen sizes and devices.
- **Google Authentication**: Users can sign in using their Google accounts via Firebase authentication.
- **Deployment**: The project is deployed on Vercel for easy access and demonstration.

## Technologies Used

- **React**: For building the user interface.
- **Firebase**: For implementing Google authentication.
- **Vercel**: For deployment.
- **SCSS**: For styling.
- **Ant Design**: For components and icons.
- **Figma**: For the design reference.

### Firebase Configuration

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Google authentication in the Firebase Authentication section.
3. Create a `.env` file in the root of your project and add your Firebase configuration:
   ```plaintext
   REACT_APP_APIKEY=your-api-key
   REACT_APP_AUTHDOMAIN=your-auth-domain
   REACT_APP_PROJECTID=your-project-id
   REACT_APP_STORAGEBUCKET=your-storage-bucket
   REACT_APP_MESSAGINGSENDERID=your-messaging-sender-id
   REACT_APP_APPID=your-app-id
   ```

### Running the Project

To start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Click on the "Sign in with Google" button.
3. Authenticate using your Google account.
4. Once authenticated, you will be redirected to the Data entry page.

## Credits

- Design provided by BREATHE ESG.
- Developed by Mansi.

---

Feel free to contact me at [mansisharma209aps@gmail.com](mailto:mansisharma209aps@gmail.com) for any questions or feedback.

---

Thank you for reviewing my assignment!
