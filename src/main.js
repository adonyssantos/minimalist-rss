import renderFeed from "./render-feed";

renderFeed();
const $sorter = document.querySelectorAll("#fieldSelect,#orderSelect")
$sorter.forEach((field) => {
    field.addEventListener("change", renderFeed);
});
