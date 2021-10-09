import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDxiAbzUTmZfgkfMGDKKATmRqIe_A0f0YU",
  authDomain: "newnotification-58f64.firebaseapp.com",
  projectId: "newnotification-58f64",
  storageBucket: "newnotification-58f64.appspot.com",
  messagingSenderId: "712488134998",
  appId: "1:712488134998:web:3b0c6a543364d28e44cef7",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BPQ66EfxW8k0R3WK38yo1DAIjL-CKr4IzGGGvGAtfnbOHekb7U_HUorHidAfpKPVuE3S2J5Gq5ZU9gMABhTM75o",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
