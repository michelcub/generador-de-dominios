const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

const btnGenerate = document.querySelector("#btn");
const listDomain = document.querySelector("#list");
const select = document.querySelector("#select");
const reset = document.querySelector("#btnReset");
const input = document.querySelector("#inputName");

const generationDomain = (pronoun, adj, noun, option) => {
  const pronounDomain = pronoun[Math.floor(Math.random() * 2 + 0)];
  const adjDomain = adj[Math.floor(Math.random() * 2 + 0)];
  const nounDomain = noun[Math.floor(Math.random() * 2 + 0)];
  return (listDomain.innerHTML += `<li class ="list-group-item"> ${pronounDomain}${adjDomain}${nounDomain}${option} </li> `);
};

const generationDomainCustom = (input) => {
  const stringInput = input.toString();
  console.log("stringInput: ", stringInput);
  const extencion = stringInput.slice(
    stringInput.length - 2,
    stringInput.length
  );
  console.log("extencion: ", extencion);
  const nameDomain = stringInput.slice(0, stringInput.length - 2);
  console.log("nameDomain: ", nameDomain);
  let domainCustom = "";

  if (stringInput.length >= 4) {
    domainCustom = `${nameDomain}.${extencion}`;
    return (listDomain.innerHTML += `<li class ="list-group-item">${domainCustom}</li>`);
  } else {
    alert("El valor de entrada no es valido");
  }
};

const switchGenerationDomain = (option) => {
  return option != "auto"
    ? generationDomain(pronoun, adj, noun, select.value)
    : generationDomainCustom(input.value);
};
btnGenerate.addEventListener("click", () => {
  switchGenerationDomain(select.value);
});

reset.addEventListener("click", () => {
  location.reload();
});
