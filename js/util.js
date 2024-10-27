const getRandom = function (min, max) {
    if (min < 0 || max < 0) {
      return -1;
    }
  
    if (min > max) {
      [min, max] = [max, min]
    }
    return Math.floor(Math.random() * (max - min + 1))  + min;
}


const maxLength = function (str, max) {
return str.length > max;
}



export {getRandom, maxLength}