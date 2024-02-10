let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let p = document.querySelector("#res");


btn.addEventListener("click", async () => {
    let res = await getFacts();
    p.innerText = res;
})

async function getFacts() {
    let fact = await axios.get(url);
    return fact.data.fact;
}
