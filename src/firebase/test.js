import firebase from 'firebase/firebase-app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
    .collection("users")
    .doc("oPhMjpIwujhll7Op1Y3P")
    .collection("cartItems")
    .doc("gJ7sYw23mOcMJizn4WEY");

    