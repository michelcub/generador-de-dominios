const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

const btnGenerate = document.querySelector("#btn");
const listDomain = document.querySelector("#list");
const option = document.querySelector("#select").value;
const reset = document.querySelector('#btnReset');

const generationDomain = (pronoun, adj, noun, option) => {
  const pronounDomain = pronoun[Math.floor(Math.random() * 2 + 0)];
  const adjDomain = adj[Math.floor(Math.random() * 2 + 0)];
  const nounDomain = noun[Math.floor(Math.random() * 2 + 0)];
  return `<li class ="list-group-item"> ${pronounDomain}${adjDomain}${nounDomain}${option} </li> `;
};

btnGenerate.addEventListener("click", () => {
  listDomain.innerHTML += generationDomain(pronoun, adj, noun, option);
});

reset.addEventListener('click', ()=>{
    location.reload();
})