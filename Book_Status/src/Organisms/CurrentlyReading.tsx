
const cr=`{"currentlyreading":[{"id":1,"src":"1.png","name":"Bring Your Human to Work", "author":"Erica Keswin", "duration":"13-minute read","noOfReads":"1.9k reads"},
{"id":2,"src":"11.png","name":"Employee to Entrepreneur", "author":"SteveGlaveski", "duration":"15-minute read","noOfReads":"2k reads"},
{"id":3,"src":"3.png","name":"Doesn’t Hurt to Ask", "author":"TreyGowdy", "duration":"13-minute read","noOfReads":"1.2k reads"},
{"id":4,"src":"4.png","name":"The Fate of Food", "author":"AmandaLittle", "duration":"18-minute read","noOfReads":"16k reads"},
{"id":5,"src":"5.png","name":"Lives of the Stoics", "author":"RyanHoliday", "duration":"23-minute read","noOfReads":"1k reads"},
{"id":6,"src":"6.png","name":"Loving Your Business", "author":"DebbieKing", "duration":"5-minute read","noOfReads":"8k reads"},
{"id":7,"src":"7.png","name":"The Lonely Century", "author":"NoreenaHertz", "duration":"15-minute read","noOfReads":"1.9k reads"},
{"id":9,"src":"9.png","name":"Dropshipping", "author":"JamesMoore", "duration":"8-minute read","noOfReads":"5k reads"}
]}`;

const currentreading=JSON.parse(cr);
const CurrentlyReading=currentreading.currentlyreading;
export default CurrentlyReading;
