// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop != "tracks") {
    collection[id][prop] = value;
  }
  return collection;
}
// Alter values below to test your code
//debugger;
collection = updateRecords(5439, "artist", "ABBA");
Console.log(collection);

//Console.log(collection["5439"].artist);
// collection = updateRecords(5439, "tracks", "Take a Chance on Me");
//Console.log(collection["5439"].tracks);
// updateRecords(1245, "tracks", "Addicted to Love");
//Console.log(collection["1245"].tracks);
// updateRecords(2468, "tracks", "Free");
//Console.log(collection["2468"].tracks);
// updateRecords(2548, "tracks", "")
//Console.log(collection["2468"].tracks);
