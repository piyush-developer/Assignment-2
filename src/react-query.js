// import { QueryClient, QueryClientProvider } from "react-query";
// import RandomUserContainer from "./RandomUserContainer";

// const queryClient = new QueryClient()
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="App">
//         <RandomUserContainer count={500}/>
//       </div>
//     </QueryClientProvider>
//   );
// }


// -------------------------------


// import {useQuery} from "react-query";

// const AdsContainer = ({children, count}) => {
//   const query = useQuery('todos', async () => {
//      const API = `https://randomuser.me/api/?results={count}`;
//      const response = await fetch(API);
//      return await response.json();
//   })

  
//   /* logics that depends on your data
//    * userEffect(() => {}, [data.length])
//    */

//   return (
//     <RandomUserComponent data={query.data}>
//       {children}
//     </RandomUserComponent>
//   )
// }