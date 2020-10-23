const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countElem = document.getElementById("count");
const breweryList = document.getElementById("breweryList");

const increment = () => {
  const count = parseInt(countElem.textContent, 10);
  countElem.textContent = count + 1;
};

const decrement = () => {
  const initialCount = parseInt(countElem.textContent, 10);
  countElem.textContent = initialCount - 1;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

fetch("https://api.openbrewerydb.org/breweries").then((response) => {
  response.json().then((result) => {
    result.forEach((brewery) => {
      const breweryElem = document.createElement("li");
      breweryElem.innerText = brewery.name;
      breweryList.appendChild(breweryElem);
    });
  });
});
