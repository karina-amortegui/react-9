import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from: https://randomuser.me/api/?results=10
- Run fetch when component mounts
- Display:
  - Name
  - Email
  - Profile picture
- Add a "Refresh User" button (optional)
*/

/**
 * Get Data, Make a request to an api 
 * 1. useState to hold the data
 * 2. useEffect - when do you want to fetch data
 * 3. how do we want to render the data
 */

/**
 * 1. useState [10 users in here]
 * 2. make a request to the api 
 * 3. update state to new data from the api 
 * 4. useState [10 users in here]
 * 5. update the ui to show 10 users
 */

export default function RandomUser() {
  const [usersData, setUsersData] = useState<any>([]);// undefined => [10 users in here]
  const [numberOfUsers, setNumberOfUsers] = useState<string>('');

  async function fetchData() {
    // making a request to get data from this api endpoint
    try {
      // 
      const data = await fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
      .then(response => response.json());
      
      setUsersData(data.results);
      
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data' + error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [numberOfUsers]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input className="border-1 rounded-xl p-2" onChange={(e) => setNumberOfUsers(e.target.value)} value={numberOfUsers} />
      {/* <button onClick={fetchData} className="border-1 rounded-xl px-4 py-2">Get Users</button> */}
      
      {/* userData.map(() =>  some stuff here) | nothing shows up here */}
      {usersData.map((user: any) => (
        <div className="flex gap-2">
          <p>name: {user.name.first}</p>
          <p>gender: {user.gender}</p>
        </div>
      ))}
    </div>
  );
}