const dotevn = require("dotenv");
const assert = require("assert");

dotevn.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    DATABASE
} = process.env;

assert(PORT, "Port is required");
assert(HOST, "Host is required");

module.exports= {
    DATABASE,
    host: HOST,
    port: PORT,
    url: HOST_URL,
     firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}
