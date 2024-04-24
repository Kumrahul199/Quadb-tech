importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyAbYt8HS06GL0PWa3ofs0FbqdhsXzP6aBQ",
    authDomain: "Finstreet.firebaseapp.com",
    projectId: "Finstreet",
    storageBucket: "Finstreet.appspot.com",
    messagingSenderId: "731723132211",
    appId: "1:731723132211:web:fda46f3d0560a87254a246",
    measurementId: "G-X6SEM785DR",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon,
    };
    return self.registration.showNotifications(
        payload.notification.title,
        notificationOption
    );
});