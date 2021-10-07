importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCLZTJUNHRv1KzfbmJTzXwCpfONWhwp7pA",
    authDomain: "webnotifysystem.firebaseapp.com",
    projectId: "webnotifysystem",
    storageBucket: "webnotifysystem.appspot.com",
    messagingSenderId: "1049077821062",
    appId: "1:1049077821062:web:2fb08320f6a430ee3cab07",
    measurementId: "G-8GMFBBX310"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon
    };
    return self.registration.showNotification(payload.notification.title, notificationOption);
});