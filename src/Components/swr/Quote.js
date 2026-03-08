import useSWR from "swr";
const fetcher = async (...args) => {
        
                const response = await fetch(...args);
                const res = await response.json();
                return res;
};
export default function Quote() {
   const {data,error}=useSWR("https://jsonplaceholder.typicode.com/posts",fetcher,{suspense:true})
   
      if(error)
      {
        return(
            <div>
                this error occur
            </div>
        )
      };
    return (
        <div>
            {data.map((item) => (
                <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}