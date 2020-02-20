/******************
 * YOUR CODE HERE *
 ******************/
const classroom = ['Jumary', 'Deandrea','Micheal', 'Denis', 'Patrick', 'Carlos', 'Marc']


for (let i= 0; i < classroom.length; i++){
    console.log(classroom[i])
}



function getFirstItemFrom(School){

  return School[0];
  }
  function getLastItemFrom(is){
    return is[is.length -1];
  }
  function getIndex3 (array){
    if ((array.length) < 4){
      return array[array.length -1];
    }
    return array[3];
  }
  function isLongList(stressful){
    if (stressful.length >= 10){
      return true;
    } else {
      return false;
    }
  }
  function firstItemIsNumber(atTimes){
    if(typeof atTimes[0] === 'number' ){
      return true;
    }else {
        return false;
      }
    }
  function secondCharOfThirdString(IGotThis){
    return IGotThis[2][1];
  }



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
