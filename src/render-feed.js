import RSS from "vanilla-rss";
import viewerManager from "./viewer-manager";
import getSubscriptions from "./get-subscriptions";

const $orderSelect = document.querySelector("#orderSelect");
const $fieldSelect = document.querySelector("#fieldSelect");
const order = [$orderSelect.value, $fieldSelect.value].filter(Boolean).join("");

const rssConfig = {
    order,
    limit: 100,
    entryTemplate: '<li><input type="checkbox" class="post-viewed" value="{url}" /> <a href="{url}">[{author}@{date}] {title}</a></li>',
    encoding: 'ISO-8859-1 ',
}

export default async function renderFeed() {
    const $rssFeed = document.querySelector("#rss-feeds");
    $rssFeed.innerHTML = "";

    const subscriptionsByCategory = await getSubscriptions(import.meta.env.VITE_SUBSCRIPTIONS_TXT_URL);
    const allSubscriptions = Array.from(subscriptionsByCategory.values()).flat();
    const rss = new RSS($rssFeed, allSubscriptions, rssConfig)
    await rss.render()
    viewerManager();
}
