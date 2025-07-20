/* Setup Challenge :

practice on setting up state values and data fetching
create state variable
user - default value null
fetch data from the url (for now just log result)
if you see user object in the console, continue with the videos
 */

import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }
  const { name, avatar_url, bio, company } = user;
  return (
    <div>
      <h1>Fetch Data</h1>
      <h1>{name}</h1>
      <img src={avatar_url} alt={name} />
      <h2>Works at{company}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
