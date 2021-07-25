// Selectors
const btn = document.querySelector(".btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

let array_of_data;

// Creat random number
const randomNumber = function (length) {
  return Math.floor(Math.random() * length);
};

//Show on browser
const dataShow = () => {
  const data = array_of_data[randomNumber(array_of_data.length)];
  console.log(data);

  quote.innerText = data.text;
  if (!data.author) {
    author.innerText = "Unknown";
  } else {
    author.innerHTML = `<span>&mdash;</span>${data.author}`;
  }
};

// Get Quotes from API
(async function getQuotes() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    //Check for error
    if (!response.ok) throw new Error("Something Went Wrong");

    array_of_data = await response.json(); //Array of Objects

    // Show To The Browser
    dataShow();
  } catch (error) {
    console.log(error.message);
  }
})();

btn.addEventListener("click", dataShow);
