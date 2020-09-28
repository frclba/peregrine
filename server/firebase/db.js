const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "twitter-growth-hacker",
    private_key_id: "287df7d29b25e2316372d91ce2de7123c531313f",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1QQOjOQmKIaEf\nPB4VBJd+vceT6RIEP2In0vVI59dMG2RGyPK2r11V1xc2nDNwXTpIpExWQJcRyc5O\nTQXyTnNK10oefDMvvoJokj9m3uDOfLDMWDu++lumBiJIxEj6kQeoHOgFWFbJ3ihH\nDdENUHSF5sUu7esKVpvNjlQ7+j1Draq7RrETsw1R55LY9qz4+lcJ+wzMgoDAdPD8\nZi4Qc6QTLmlI0Mawa5qVTU3CWmuUP05kMVKBxovKxQU/B6/r7Q98k3vkDv4jGux+\nqw2zhrVALqBC1mHCqOUkfXvxQ5+NOnSIRz68pTaNmBfcftqYOQYxxDrauw/YcaBd\nEHe6UYj5AgMBAAECggEACx2Ajprp1dm4GsVCBwHwFGqo+Y4ad743U7/hIOZu0pD/\ndkPOdpuMer4lA0lS8joVX+0LbWKqoQGiMDUS/0gGU/md5v6w2OWy85y8XJ+gY6lL\n4kwq5cxOoIDRy2qWGx+Xu5yCMgm30MtZ5vmW710WuDttrjIS7uBez51B1yfCaAr8\n+NvyHAWtmsOgZfSob6NcRc/KihS+98JWAL1f3sOsL65ko+b2OTHLCDDk0yLJQMiI\nirk8wDRDP/RW/WOzGRDYjKAvHvLWlapnq7DZcTSsqUiECUZeWi/7YkrE9Eomn2WJ\nhMuGV95ezrJnkp40xXRtMUpYvz8+T2oE3hqFgEj+rQKBgQDXdywuMBPTNVxqjPJE\nco6G92B4EHOlDMUnq1kjaAJIZHJ4ULr41SbSmmc7eApcLUp6KCoNwpmuYoVgHpjC\nyCQnFEW8BjJZ5hlkgthwuYUsieYdMIX8UJED8s/+nB5nET6jhLLVrEr2LkckA/YO\nlz0t7yCR+GftOh2HxTNBBG7yUwKBgQDXWjY4v1P13QXDvsviO2YFoZm7Bl/xIsFy\nHCh01TAB+VnDV8i4493lN9ykqkQPbfoIEV18Elz9wG6X9WTEc7qJZ45rI/7QKE4S\n9yPBWCS0F7qjMDnfAjgjS2bVW9Oxicu69Bk19BbRBmGPdQ2UzL1Ara4q2kyqkhPf\nAL+/OfZGAwKBgDWLGeGIdQTBd+vKhtHXne+QPdrYS8SyPbQz8nzH9flDbObVOQFp\nBrLDR/ARTpHFd4KPxJOSzln1hatzLwcIcWN8uC+XYp/QfHLryRmKILwGsLaEPmeL\nJd5TUri01yFJucUszrwmiqJOscMTcOwDTWLCz9c2Ya0kCf6ZVLlNfrydAoGBAJBA\nKk/KwTfQjDr5Q+LPfOBKxgoEFCIW8NM5z1OrNdQsrZbu51IJuKoAyDg4oQxg03my\nABfKySVkT/BT/OKmzo2Zo0lbPCU8ykdj6jxpiXRk7KzA8hLSjr39lO1X7C5hKemZ\n9oUwclQjXRhWBPnmRuLbM+4aef5LiSn4e3hhH/j3AoGAGS4WLPRX1YCFRhlChLPv\nMZKfuuOFfzWzdrwCkz+44ndTIjEERKiWS3Xxqgyt0fDthh/+QeabLD6ONMNC3nxd\n31xmNGN/XIvfRGKq/i/xaEiGsPCHUUpJ6NKEQ2cmIY21PmZ4x+YsYcPV3l3coz4v\n+pvgh13TncJwjS69crckWc0=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-myibh@twitter-growth-hacker.iam.gserviceaccount.com",
    client_id: "113798570647570572417",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-myibh%40twitter-growth-hacker.iam.gserviceaccount.com",
  }),
  databaseURL: "https://twitter-growth-hacker.firebaseio.com",
});

const db = admin.firestore();

module.exports.db = db;
