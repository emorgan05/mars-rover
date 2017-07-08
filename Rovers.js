function rover(arr) {
  // Setting variables. Heading is a string, so is Movement
  var x = arguments[0];
  var y = arguments[1];
  var h = arguments[2];
  // Changing the movement string into an array
  var movement = arguments[3].split('');
  
  // Iterating over the movement array
  for (var i = 0; i < movement.length; i++) {
    // Each possible movement depends on what the heading is
    // So I required what the movement is and the heading
    if(movement[i] === "M" && h === "N") {
        y = y + 1;
    } else if (movement[i] === "M" && h === "E") {
        x = x + 1;
    } else if (movement[i] === "M" && h === "S") {
        y = y - 1;
    } else if (movement[i] === "M" && h === "W") {
        x = x - 1;
    } else if (movement[i] === "L" && h === "N") {
        h = "W";
    } else if (movement[i] === "L" && h === "W") {
        h = "S";
    } else if (movement[i] === "L" && h === "S") {
        h = "E";
    } else if (movement[i] === "L" && h === "E") {
        h = "N";
    } else if (movement[i] === "R" && h === "N") {
        h = "E";
    } else if (movement[i] === "R" && h === "W") {
        h = "N";
    } else if (movement[i] === "R" && h === "S") {
        h = "W";
    } else if (movement[i] === "R" && h === "E") {
        h = "S";
    } else {
      return "false";
    }
  }
  // Expected output is coordinates and heading
  console.log(x, y, h);
}

// Tests
rover(1, 2, "N", "LMLMLMLMM");
rover(3, 3, "E", "MMRMMRMRRM");
