// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

  var totalxp = 0;
  var initlvlxp = 75;
  var lvl = 1;
  var xproof = 0;

  function battleTime(userlvl,enemylvl,buff) {
    if ((userlvl + buff) > enemylvl) {
      totalxp += 100;
      return "You win!";
    } else {
      totalxp += 33;
      return "You lose but gained some knowledge.";
    }
  }

  function levelUp(xptotal, xpnext){
    xptotal = totalxp;
    xpnext = initlvlxp;
    if (xptotal >= xpnext) {
      lvl += 1;
      xpnext = (xpnext * .33);
      xproof = xpnext;
    }
  }


// ==== Challenge 2: Create a counter function ====
const counter = (() => {
  // Return a function that when invoked increments and returns a counter variable.
  let cnt = 0;
  return () => {
      cnt += 1;
      return cnt;
  }
})();

// ???
//function counter() {
//  counter += 1;
//}
// ???
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let cnt = 0;
  return {
    "increment": function(){
      cnt += 1;
      return cnt;
    },
    "decrement": function(){
      counter --;
      return counter;
    }
  }
});
