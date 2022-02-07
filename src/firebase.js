import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const config=require('./config')

// Initialize Firebase
const app = initializeApp(config);
export const auth=getAuth(app);
export default app;
