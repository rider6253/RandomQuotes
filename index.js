
////////////////// Javascript file for quotes.html //////////////////////
let realData = "";
let rnum = 0;
const quote = document.getElementById("quote");
const auth = document.getElementById("authr");
const getnewQuotes = () => {
  rnum = Math.floor(Math.random() * realData.length);

  
  quote.innerText = `${realData[rnum].text}`;
  let author = realData[rnum].author;
  if (author == null) author = "Unknown";
  auth.innerText = "....." + author;
};

const api = "https://type.fit/api/quotes";
const getquotes = async () => {
  try {
    data = await fetch(api);
    realData = await data.json();
    getnewQuotes();
  } catch (error) {}
};
const tweetme = () => {
  const tweetlink = "https://twitter.com/compose/tweet?";
  window.open(tweetlink + "text=" + realData[rnum].text );
};

let time = 1;
setInterval(() => {
  console.log("called");
  time = time % 2;
  if (time) {
    document.getElementById("tweeti").style.animation = "tweetRot 1s 1";
  } else {
    document.getElementById("tweeti").style.animation = "none";
  }
  time = time + 1;
}, 1000);

getquotes();
