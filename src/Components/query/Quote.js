import { useQuery } from "@tanstack/react-query";
import fetchQuote from "./getQuoteApi";

export default function Quote() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"], // Must be an array
        queryFn: fetchQuote
    });

    if (isLoading) return <div>Loading the data wait....</div>;
    if (error) return <div>Error loading data!</div>;

    return (
        <div>
            {/* {data?.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                    <h3>{item.title}</h3>
                </div>
            ))} */}
            {data?.title}
        </div>
    );
}