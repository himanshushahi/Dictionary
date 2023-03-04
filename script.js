let output = document.getElementById("output");
let means = document.getElementById("means");
document.getElementById("search").addEventListener("click", () => {
  let word = document.getElementById("input").value;
  output.innerText = "Please wait..."
  let data = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  data
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        output.innerHTML = `<div style="color:red">There is some problem please try after some time </div>`;
      }
    })
    .then((responce) => {
      means.innerHTML = `<h4>Result for:</h4><p style="text-transform: capitalize; color:green">${word}</p>`
      output.innerText = responce[0].meanings[0].definitions[0].definition;
    });
});
