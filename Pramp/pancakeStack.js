function pancakeSort(arr) {
    // your code goes here
  }
  
  function flip(arr, k){
    
    let i = 0;
    let kIndex = k
    while(i < kIndex){
      let tmp = arr[i];
      arr[i] = arr[kIndex];
      arr[kIndex] = tmp;
      i++;
      kIndex--;
    }
    return arr;
  }
  
  let answer = flip([1,2,3,4,5], 2)
  console.log(answer)