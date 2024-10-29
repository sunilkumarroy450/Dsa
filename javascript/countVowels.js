const str = "sunil kumar";

function countVowel(str) {
  const vowels = "aeiouAEIOU";

  //   return Array.from(str).filter((char) => vowels.includes(char)); // array of vowels
  //   return Array.from(str).filter((char) => vowels.includes(char)).length; // length of vowels
  //   return Array.from(str)
  //     .filter((char) => vowels.includes(char))
  //     .join(" "); // string of vowels

  //   const strArray = str.split("");
  //   return strArray.filter((char) => vowels.includes(char));

  //   const strArray = str.split("");
  //   let bag = "";
  //   for (let i = 0; i < strArray.length; i++) {
  //     if (vowels.includes(strArray[i])) {
  //       bag += strArray[i];
  //     }
  //   }
  return bag;
}

console.log(countVowel(str));
