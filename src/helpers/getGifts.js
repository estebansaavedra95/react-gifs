
export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=lGIrmadItaEPtSiPnC0ljFEPjI44TEA5`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(d => {
        return {
            id: d.id,
            title: d.title,
            url: d.images.downsized_medium.url
        }
    })
    return gifs;
}