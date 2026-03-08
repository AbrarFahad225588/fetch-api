import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Quote from "./Components/query/Quote";

// Move this OUTSIDE the component
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="App">
         <Quote />
         <Quote />
      </div>
    </QueryClientProvider>
  );
}
export default App;