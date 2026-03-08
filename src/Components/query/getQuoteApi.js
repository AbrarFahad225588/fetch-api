export const fetchQuote = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
};

export default fetchQuote;