module.exports = function towelSort (matrix) {
  let result = [];
  let n = 0;
  if (matrix === undefined || matrix.length == 0) return (result);
  else { 
    for (let index of matrix){
      if (n % 2 != 0) {
        result.push(index.reverse()); 
        n ++
      }
      else {
        result.push(index); 
        n++
      }
    
    }
  }
  return (result.join().split(",")); 
}
