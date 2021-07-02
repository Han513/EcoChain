import ReactDOM from "react-dom";
import { MakeMainRoutes } from "./router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
const routes = MakeMainRoutes();
var firebaseConfig = {
  apiKey: "AIzaSyDUPp3ZeGqxSTLPBCSMWiDbyGtkJ_j1p0U",
  authDomain: "ecochain-13417.firebaseapp.com",
  projectId: "ecochain-13417",
  storageBucket: "ecochain-13417.appspot.com",
  messagingSenderId: "327371806573",
  appId: "1:327371806573:web:6349ab9db399f1b51bac64",
  measurementId: "G-24HKRXFXB3",
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(routes, document.getElementById("root"));

reportWebVitals();
