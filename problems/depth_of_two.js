
/*
Given an object that has other objects nested inside of it, write a
function that takes that object and returns an array of all values
that are at a depth of 2.

BONUS:
Given a nested object with any number of levels, write a function
"anyDepthBonus" that returns an array of the key values contained
at any chosen level. The second argument of "anyDepthBonus" will be
a number designating the chosen level.

Hint: you may want to use recursion.
*/

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const depthOfTwo = (obj) => {
  return anyDepthBonus(obj, 2);
}

const anyDepthBonus = (obj, depth) => {
  console.log(obj);
  let result = [];
  depthCalc(0, obj, result, depth);
  return result;
}

const depthCalc = (currDepth, obj, record, targetDepth) => {
  if(currDepth === targetDepth) record.push(obj);
  else if((obj instanceof Object) && (!Array.isArray(obj))) {
    for(let key in obj) {
      depthCalc(currDepth + 1, obj[key], record, targetDepth);
    }
  }
}



// console.log(depthOfTwo(nestedObj));               // ["cello", "dello", "fellow", { h: "hello", i: "io" }, "jello"]
// console.log(anyDepthBonus(nestedObj, 3))          // ["hello", "io"]

/*** Do not change the code below this line ***/
module.exports = { depthOfTwo, anyDepthBonus }
