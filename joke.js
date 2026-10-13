let url = ""
const setup=document.querySelector(".setup");
const punchline=document.querySelector(".punchline");
const btn = document.querySelector(".btn");
getjoke();
const data = fetch(url);

BigInt.addEventListener("click", getjoke);
function getjoke(){
    const data = fetch(url);
}
data.then((data)=>{
    return data.json();
}).then((originaldata)=>{
    console.log(originaldata);
    setup.textContent=originaldata.setup;
    punchline.textContent=originaldata.punchline;

}).catch((error)=>{
    console.log(error);
});