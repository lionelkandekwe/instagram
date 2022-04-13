import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBhtnc75WL1XZJEDaYtmZzaF3hbIo06Pfs",
  authDomain: "instagram-rn-app-d77b6.firebaseapp.com",
  projectId: "instagram-rn-app-d77b6",
  storageBucket: "instagram-rn-app-d77b6.appspot.com",
  messagingSenderId: "498653323648",
  appId: "1:498653323648:web:3557e2081efba16034a165",
}
initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }
