var dancingWords = [];
var texts;

class DanceSpan{
  constructor(element, x, y){
    element.position(x,y);
    this.element = element;
    this.x = x;
    this.y = y;
  }

  brownian(){
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }
}

function setup(){
  // load data from ny times endpoint
  var url= 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rain&api-key=7tGOPRANNVIG9ETUezuZGGGi7TT7LmEd';
  loadJSON(url, gotText);
}

function draw(){
  // display the letters
  for(var i=0; i<dancingWords.length; i++){
    dancingWords[i].brownian();
  }
}

function gotText(nytimes){
    texts = nytimes.response.docs[0].headline.main;

    console.log(texts);
    // create new dom element
    // createP('Hello Worlds').addClass('text');
    createP(texts).addClass('text');

    texts = selectAll('.text');
  
    // getting letters from the paragraph
    for(var i=0; i<texts.length; i++){
      const paragraph = texts[i].html();
      const words = paragraph.split(' ');
      // update the dancingWords array with elements
      for(var j=0; j<words.length; j++){
        const spannedWord = createSpan(words[j]);
        const dw= new DanceSpan(spannedWord, random(600), random(200));
        dancingWords.push(dw);  
      }
    }

    setTimeout(gotText, 3000);
}
