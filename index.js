const dateText = document.querySelector('#date');
const button = document.querySelector('#button');
const content = document.querySelector('#content');
const input = document.querySelector('#input');

function getTodaysDate() {
  return new Date();
}

async function getDataFromServer(userInput) {
  const response = await fetch(`https://aztro.sameerkumar.website/?sign=${userInput}&day=today`, {
    method: 'POST'
  });
  const data = await response.json();

  console.log(data);
  return data;
}

dateText.innerHTML = getTodaysDate();


button.addEventListener('click', async () => {
  await getDataFromServer(input.value);
  content.innerHTML = data.description;
});