class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, ""); 
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let stringArray = string.split(" ");
    let finishedTitlte = [];
    for(let i = 0; i <stringArray.length; i++) {
      if (i == 0) {
        finishedTitlte.push( this.capitalize(stringArray[i]))
      } else {
        if ( exceptions.includes( stringArray[i]) ) {
          finishedTitlte.push(stringArray[i])
        } else {
          finishedTitlte.push(this.capitalize(stringArray[i]))
        }
      }
    }
    return finishedTitlte.join(" ");
  }
}



// const titleString = stringArray.map(word => {
//   if(word === 'a' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from') {
//     return word;
//     console.log(word);
//   }
// })