/* eslint-disable */
window.onload = function() {
  //write your code here
  document.querySelector("#domain").innerHTML = domainGenerator();
};
const domainGenerator = () => {
  let pronouns = ["the", "our", "your", "my"];
  let adjs = ["great", "big", "magic", "fancy"];
  let nouns = ["jogger", "racoon", "dog", "cat"];
  let domains = [];

  for(let pronoun of pronouns ){
    for(let adj of adjs){
      for(let noun of nouns){
        domains.push(`${pronoun}${adj}${noun}`)
      }
    }
  }

  return(`<ul>${domains.map(domain => `<li>${domain}.com</li>`).join(" ")}</ul>`);
};
