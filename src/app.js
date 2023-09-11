/* eslint-disable */
window.onload = function() {
  //write your code here
  document.querySelector("#domain").innerHTML = domainGenerator();
};
const domainGenerator = () => {
  let pronoun = ["the", "our", "your", "my"];
  let adj = ["great", "big", "magic", "fancy"];
  let noun = ["jogger", "racoon", "dog", "cat"];
  let randomDomain = "";
  for (let i = 0; i <= 4; i++) {
    randomDomain =
      pronoun[Math.floor(Math.random() * 3)] +
      adj[Math.floor(Math.random() * 3)] +
      noun[Math.floor(Math.random() * 3)];
  }
  return randomDomain + ".com";
};
