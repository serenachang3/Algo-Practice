//Solution 1
function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrIdx = 0;
      let seqIdx = 0;
      while(arrIdx < array.length && seqIdx < sequence.length) {
      if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
          arrIdx++
      }
      return seqIdx === sequence.length;
  }

  //Solution  2
  function isValidSubsequence(array, sequence) {
    // Write your code here.
      let seqIdx = 0;
      for (const value of array) {
          if (seqIdx === sequence.length) break;
          if (sequence[seqIdx] === value) seqIdx++;
      }
      return seqIdx === sequence.length;
  }



//This solution doesn't work 100% because does not account for repeat numbers

// function isValidSubsequence(array, sequence) {
//     // Write your code here.
//       let arrayIdx;
//       let count = 0;
      
//       if(array.length < sequence.length){
//           return false;
//       }
      
//       for(let i = 0; i < sequence.length ; i++){
//           let currSequenceNum = sequence[i];
          
//           if(array.includes(currSequenceNum)){
//                let idx = array.findIndex(num => num === currSequenceNum)
//                if(arrayIdx < idx){
//                    arrayIdx = idx
//                    count++
//                }
//           }
//           if(count === sequence.length){
//               return true;
//           }
//       }
//       return false;
//   }