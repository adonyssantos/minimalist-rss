import renderFeed from "./render-feed";

export default function vanillaRss() {
    renderFeed();
    const $sorter = document.querySelectorAll("#fieldSelect,#orderSelect")
    $sorter.forEach((field) => {
        field.addEventListener("change", renderFeed);
    });
}
