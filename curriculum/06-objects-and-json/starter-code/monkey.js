/*
  Solution Morse code
  JSD-1 Riyadh
*/
let morse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
}
// ```
// Try encoding the following strings:

// `
var firstWord = "ebere is a nice guy but can be a pain sometimes so deal with it";
//`

function encode(message){
  let result = ""
  let splitText = message.split("")

  for(let i = 0; i < splitText.length; i++){
    if(splitText[i] == " "){
      result += " "
    }else{
      result += morse[splitText[i]] + " "
    }
  }

  return result
}

console.log(encode(firstWord))

// let encode = ". -... . .-. .  .. ...  .-  -. .. -.-. .  --. ..- -.--  -... ..- -  -.-. .- -.  -... .  .-  .--. .- .. -.  ... --- -- . - .. -- . ...  ... ---  -.. . .- .-..  .-- .. - ....  .. - "

let decodeString = "... .- -- ..- . .-..  -- --- .-. ... .  .. -. ...- . -. - . -..  -- --- .-. ... .  -.-. --- -.. .  --- ..- .-.  .. -. ... - .-. ..- -.-. - --- .-.  .... .- ...  - .... .  .- -. ... .-- . .-.  - ---  - .... .  ..- .-.. - .. -- .- - .  --.- ..- . ... - .. --- -.  --- ..-.  .-.. .. ..-. .  - .... .  ..- -. .. ...- . .-. ... .  .- -. -..  . ...- . .-. -.-- - .... .. -. --.  -... ..- -  .. - ...  .-  .-.. .. ."

function morseDecode(message) {
  let result = "";
  message = message.split(" ");

  //loops through the message each character
  for (var i= 0; i < message.length; i++) {
      if (message[i]=='') {
          result+= ' ';
      }

      //for every element in key
      for (value in morse) {
          //if message equals the value
          if (message[i]==morse[value]) {
              result+= value; //add key
          }
      }
  }

  return result;
}

console.log(morseDecode(decodeString))
