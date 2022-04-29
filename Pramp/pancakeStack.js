function pancakeSort(arr) {
    // your code goes here
    for (let i = arr.length-1 ; i >= 0 ; i--){
      let maxIndex = findMaxIndexInPrefix(arr, i)
      flip(arr, maxIndex)
      flip(arr, i)
    }
    return arr
  }
  
  function findMaxIndexInPrefix(arr, k){
    let ans = 0;
    for(let i = 0; i <= k ; i++){
      if(arr[i] > arr[ans]){
        ans = i
      }
    }
    return ans
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
  
  let answer = pancakeSort([5,4,3,2,1])
  console.log(answer)