// 91. Testing Objects for Properties
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
    return "Not Found";
  }

// 92. Manipulating Complex Objects
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

// 93. Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  const gloveBoxContents = myStorage.car.inside["glove box"];

//   94. Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

// 95. Record Collection
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
     if (prop != "tracks" && value != "") {
      records[id][prop] = value;
    } else if (prop == "tracks" && value != "" && records[id].hasOwnProperty("tracks") == false) {
      records[id][prop] = [value];
    } else if (prop == "tracks" && value != "") {
      records[id][prop].push(value);
    } else if (value == "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
// 96. Iterate with JavaScript While Loops
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

// 97. Iterate with JavaScript For Loops
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// 98. Iterate Odd Numbers With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for(let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

// 99. Count Backwards With a For Loop
// Setup
const myArray = [];

// Only change code below this line
for(let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

// 100. Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}