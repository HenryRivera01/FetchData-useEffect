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

import { useEffect, useState } from "react";
import type { UserType } from "./UserType"

const url = "https://api.github.com/users";

export const FetchData = () => {
  //useEffect for call fetchData function when the componentens are mount
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url); //make the request fot the API
        const data : UserType[] = await res.json(); //converts the raw response to json
        //Data now contain the actual array of users
        console.log(data); // print the users
        const infoUsers = data.map(({ login, avatar_url, html_url }) => {
        return { login, avatar_url, html_url };
        });
        setUsers(infoUsers);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []); //Empty dependency array for call useEffect once

  

  console.log(users);

  return <div className="users-container">
    {users.map((user)=>{
        return (
            <div className="user-container">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.login}</h2>
            <a href={user.html_url}>{user.html_url}</a>
            </div>

        )
    })}
  </div>;
};

export default FetchData;
