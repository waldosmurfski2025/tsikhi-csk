let articles = [];

fetch("/tsikhi-csk/search.json")
    .then(r => r.json())
    .then(data => articles = data);

const box = document.getElementById("search-box");
const results = document.getElementById("search-results");

box.addEventListener("input", () => {

    const q = box.value.toLowerCase();

    results.innerHTML = "";

    if(q.length < 2)
        return;

    const matches = articles.filter(a =>
        a.title.toLowerCase().includes(q)
    );

    matches.slice(0,10).forEach(a=>{

        results.innerHTML += `
        <div class="search-result">

            <a href="${a.url}">${a.title}</a>

            <div class="search-library">
                ${a.library}
            </div>

        </div>
        `;

    });

});