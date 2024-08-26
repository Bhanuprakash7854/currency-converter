

const dropdowns = document.querySelectorAll(".dropdowns");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const button = document.querySelector("button");
const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
const input = document.querySelector("#currency");
const result = document.querySelector("#result");
for(let select of dropdowns)
{
    for(code in countryList)
    {
        const option = document.createElement("option");
        option.innerText = code;
        option.value = code;
        select.append(option);
    }

    select.addEventListener("change",(event)=>
    {
        updateFlag(event.target);
    })
}

let updateFlag = (element)=>
{
    const code = countryList[element.value];
    const newSrc = `https://flagsapi.com/${code}/flat/64.png`;
    let img =  element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click",async(event)=>
{
    event.preventDefault();
    const URL = `${BASE_URL}/${to.value}_${from.value}.json`;
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data["rate"];
    if(input.value <1)
    {
        input.value = 1;
    }
    result.innerHTML = `${input.value} ${from.value} = ${(input.value)*rate} ${to.value}`;
})