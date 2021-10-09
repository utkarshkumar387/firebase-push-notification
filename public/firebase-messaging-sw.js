// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDxiAbzUTmZfgkfMGDKKATmRqIe_A0f0YU",
  authDomain: "newnotification-58f64.firebaseapp.com",
  projectId: "newnotification-58f64",
  storageBucket: "newnotification-58f64.appspot.com",
  messagingSenderId: "712488134998",
  appId: "1:712488134998:web:3b0c6a543364d28e44cef7",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
