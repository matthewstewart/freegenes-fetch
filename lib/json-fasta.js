function jsonArrToFasta(arr, genID, desc, seq) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    const rec = arr[i];
    const isValid = rec[genID] && rec[seq];
    if (isValid) {
      res += `\n>${rec[genID]} `;
      if (rec[desc]) { res += `${rec[desc]}\n` } else { res += '\n'}
      res += `${rec[seq]}`;
    }  
  }
  return res;
}

function jsonObjToFasta(genID, desc, seq) {
  let res = "";
  const isValid = genID && seq;
  if (isValid) {
    res += `\n>${genID}`;
    if (desc) { res += ` ${desc}\n` } else { res += '\n'}
    res += `${seq}`;    
  }
  return res;
}

module.exports = {
  jsonArrToFasta, jsonObjToFasta
};