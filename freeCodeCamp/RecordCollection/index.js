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

   if (!value) {
       console.log("value is not populated")
       delete collection[id][prop];
       return collection;
   }
   if (prop != "tracks") {
      collection[id][prop] = value;
   } else {
        if (prop == "tracks") {
            if (!collection[id][prop]) {
                collection[id][prop] = [];
            }
            collection[id][prop].push(value);
        }
   }
   return collection;
}
// Alter values below to test your code
//console.log(collection);
//console.log("-----------------------------------------------------");

//collection = updateRecords(5439, "artist", "ABBA");
//collection = updateRecords(5439, "tracks", "Take a Chance on Me");
//  collection = updateRecords(1245, "tracks", "Addicted to Love");
//  collection = updateRecords(1245, "tracks", "another");
// collection = updateRecords(2468, "tracks", "Free");
collection = updateRecords(2548, "tracks", "");

console.log(collectionCopy);
console.log("-----------------------------------------------------");
console.log(collection);

