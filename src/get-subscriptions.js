export default async function getSubscriptions(url) {
    const response = await fetch(url)
    const text = await response.text()
    const regex = /--(.*?)--\n(.*?)(?=\n--|$)/gs;
    const subscriptions = new Map();
    let match;

    while ((match = regex.exec(text)) !== null) {
        const category = match[1].trim();
        const urls = match[2].trim().split('\n').map(url => url.trim());
        subscriptions.set(category, urls);
    }

    return subscriptions
}
