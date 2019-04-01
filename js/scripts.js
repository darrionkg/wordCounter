$(document).ready(function() {
  $(".theForm").submit(function(event) {
    var input = $("#inputText").val();
    var wordList = input.split(' ');
    var wordNew = [];
    wordList.forEach(function(word) {
      if(wordNew.includes(word)) {
        wordNew[wordNew.indexOf(word) + 1] += 1;
      }else if(input === "") {
        console.log("no input");
      }
      else {
        wordNew.push(word, 1);
      }

    });
    for(var i = 0;i<wordNew.length;i+=2)
    {
      $("#addToList").append('<li>' + wordNew[i] + " " + wordNew[i+1]+ '</li>');
    }
    // wordNew.forEach(function(word) {
    //   if(isNaN(word)){
    //   $("#addToList").append("<li>" +word);
    // }else{
    //   $("#addToList").append(word+"</li>");
    // }
    // });
    event.preventDefault();
  });
});
//This is a sentence
//[[This,1],[Is,1],[A,1],[Sentence,1]]
