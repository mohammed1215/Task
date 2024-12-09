function combineWords(word1, word2) {
  let result = "";
  let len1 = word1.length;
  let len2 = word2.length;
  let max_length = Math.max(len1, len2);
  for (let i = 0; i < max_length; i++) {
    result += (word1[i] || "") + (word2[i] || "");
  }
  console.log(result);
}
combineWords("Ahmed is", "Amazing"); // AAhmmaezdi nigs
combineWords("SCE WORD", "ERT"); // SECRET WORD
combineWords("IEEE ManCSC", "Backend Committee"); // IBEaEcEk eMnadn CCSoCmmittee
