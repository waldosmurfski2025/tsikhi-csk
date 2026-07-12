const preview = document.getElementById("preview-card");

const BASE =
    window.location.pathname.startsWith("/tsikhi-csk/")
        ? "/tsikhi-csk"
        : "";

let previews = {};

fetch(`${BASE}/api/previews.json`)
.then(r => r.json())
.then(data => {

    data.forEach(article => {
        previews[article.url] = article.preview;
    });

});

document.querySelectorAll(".article-link").forEach(link => {

    link.addEventListener("mouseenter", e => {

        preview.classList.add("show");

        console.log("dataset:", link.dataset.page);
        console.log("available:", Object.keys(previews));

        const page = previews[link.dataset.page];

        if(page){

            document.getElementById("preview-title").textContent =
                page.title;

            document.getElementById("preview-summary").textContent =
                page.summary;

            document.getElementById("preview-image").src =
                `${document.documentElement.dataset.base}${page.image.replace(/^\//, "")}`;

        }else{

            document.getElementById("preview-title").textContent =
                link.textContent;

            document.getElementById("preview-summary").textContent =
                "No preview available.";

            document.getElementById("preview-image").src =
                "/images/tsikhi-logo.png";

        }

        positionPreview(e);

    });

    link.addEventListener("mousemove", e => {

        positionPreview(e);

    });

    link.addEventListener("mouseleave", () => {

        preview.classList.remove("show");

    });

});

function positionPreview(e){

    const margin = 18;

    const rect = preview.getBoundingClientRect();

    let left = e.clientX + margin;
    let top  = e.clientY + margin;

    // Flip to the left if too close to the right edge
    if(left + rect.width > window.innerWidth - margin){
        left = e.clientX - rect.width - margin;
    }

    // Flip upward if too close to the bottom
    if(top + rect.height > window.innerHeight - margin){
        top = e.clientY - rect.height - margin;
    }

    // Clamp to viewport
    left = Math.max(margin, left);
    top  = Math.max(margin, top);

    preview.style.left = left + "px";
    preview.style.top  = top + "px";

}