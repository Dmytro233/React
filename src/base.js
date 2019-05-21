import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCiNVdVizhzIcOR3Q_jM04RHle1kG7X3MM",
  authDomain: "catch-of-the-day-mav.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mav.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
