// change code below this line
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    //   "use strict";
    //   this.gear = newGear;
    //}
    setGear(gear) {
        "use strict";
        this.gear = gear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);