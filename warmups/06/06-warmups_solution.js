// console.log("Hello");

let array = ["enlists", "google", "inlets", "banana", "istlen"];

function anagram(word) {
  let split_word = word
    .split("")
    .sort()
    .join("");

  let arr = new Array(); //[]

  for (var i = 0; i < array.length; i++) {
    let curr_element = array[i]
      .split("") // we split to make an array of charc
      .sort()
      .join("");

    if (curr_element == split_word) {
      arr.push(array[i]);
      //   console.log("element: ", array[i]);
      //   console.log("current: ", curr_element);
    }
  }

  console.log(arr);
}

anagram("listen");
