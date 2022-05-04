const fr=`{"finishedreading":[{"id":8,"src":"8.png","name":"Eat Better, Feel Better", "author":"GiadaDeLaurentiis", "duration":"7-minute read", "noOfReads":"3k reads"}
]}`;

const finishedreading=JSON.parse(fr);
const FinishedReading=finishedreading.finishedreading;
export default FinishedReading;