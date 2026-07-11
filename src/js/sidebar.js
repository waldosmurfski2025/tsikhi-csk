const button = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const layout = document.querySelector(".container");

if (button && sidebar && layout) {

    const hidden = localStorage.getItem("sidebar-hidden");

    if (hidden === "true") {
        sidebar.classList.add("collapsed");
        layout.classList.add("sidebar-hidden");
    }

    button.addEventListener("click", () => {

        sidebar.classList.toggle("collapsed");
        layout.classList.toggle("sidebar-hidden");

        localStorage.setItem(
            "sidebar-hidden",
            sidebar.classList.contains("collapsed")
        );

    });

}