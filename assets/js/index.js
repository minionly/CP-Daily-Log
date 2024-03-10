import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, get, update, onValue, child, set, remove} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxndyfxNmic-vtnB5Bqg-s_0QBDrvtHKA",
  authDomain: "daily-cp-log.firebaseapp.com",
  databaseURL: "https://daily-cp-log-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "daily-cp-log",
  storageBucket: "daily-cp-log.appspot.com",
  messagingSenderId: "1071797988281",
  appId: "1:1071797988281:web:67db18ff42c57b2b216468"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const reference = ref(db);

const fetchData = new Promise((resolve, reject) => {
    onValue(reference, (snapshot) => {
      resolve(snapshot.val());
    }, (error) => {
      reject(error);
    });
  });

export default fetchData;