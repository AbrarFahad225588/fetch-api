
import { Suspense } from "react";
import Quote from "./Components/swr/Quote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
         {/* <MyForm/> */}
         {/* <LoginForm/> */}
         <Suspense fallback={<div>this is loading state</div>}>
          <Quote/>
         </Suspense>
        
      
      </header>
    </div>
  );
}

export default App;
