// script.js

let x = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Life is what happens when you're busy making other plans. - Allen Sanders",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "Don't count the days, make the days count. - Muhammad Ali",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "You can get everything in life you want if you will just help enough other people get what they want",
  "Inspiration does exist, but it must find you working",
  "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had",
  "Show up, show up, show up, and after a while the muse shows up, too",
  "Don’t bunt. Aim out of the ballpark. Aim for the company of immortals",
  "Your Knowledge is your key to the future.",
  "Don't tell people your plans. Show them your results.",
  "When nothing goes right, go left.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "STAY HUNGRY STAY FOOLISH.",
  "Every man dies. Not every man lives.",
  "STAY HUNGRY STAY FOOLISH.",
  "Confidence is the first step towards success",
  "Tit for Tat",
  "Once you choose hope, anything’s possible.",
];
let temp = 0;

function func() {
  if (temp >= x.length) {
    temp = 0;
  }
  document.getElementById("qid").innerHTML = x[temp];
  temp++;
}
