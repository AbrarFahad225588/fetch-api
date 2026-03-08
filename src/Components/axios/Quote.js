import { useEffect, useState } from "react";
import axios from "axios";
export default function Quote() {
    // Initialize as an empty array since we expect a list
    // const [quotes, setQuotes] = useState(null); 
    const [quotes, setQuotes] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                // const res = await response.json();
                
                // Save the data to state so the rest of the component can see it
                // setQuotes(response.data[0]);
                setQuotes(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchQuote();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {/* Map over the state variable 'quotes', not 'res' */}
            {quotes.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
            {/* <h1>{quotes?.title}</h1>
        <p>{quotes?.body}</p> */}
        </div>
    );
}