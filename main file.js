var favSongs = [
  {
    order: 1,
    song: "All Star",
    artist: "Smash Mouth"
  },
  {
    order: 2,
    song: "Sandstorm",
    artist: "Darude"
  }
];
console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");

  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
    td1.innerText = favSongs[i][j];
    tr.appendChild(td1);
  }
  tbody.appendChild(tr);
}

tbody.addEventListner('click' , function() {
  
}
