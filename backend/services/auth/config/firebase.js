import admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json" with { type: "json" };

// Prevent duplicate initialization crashes during nodemon restarts
export const app = admin.apps.length === 0 
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  : admin.apps[0];