

/*
Setup Challenge

-import useState and useEffect
- setup state value
- users - default value []
- setup useEffect
- Make sure it runs only on initial render
- in the cb, create a function which perfoms fetch functionality
    -use url I provided in the starter file 
    -you can use .then or asyn
    -set users equal to result
    -iterate over the list and display: image, user name and link
-Dont worry about CSS, Most important logic 

*/

import { useEffect } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const FetchData = () => {
//useEffect for call fetchData function when the componentens are mount
useEffect(()=>{
    async function fetchData() {
        try {
            const res = await fetch(url); //make the request fot the API
            const data = await res.json(); //converts the raw response to json 
            //Data now contain the actual array of users
            console.log(data); // print the users
        } catch (err) {
            console.error(err);
        }
    }
    fetchData()
},[]) //Empty dependency array for call useEffect once  

  return (
    <div>FetchData</div>
  )
}




export default FetchData;