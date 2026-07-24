import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from an API
- Add:
  - loading state
  - error state
- Show:
  - "Loading..." while fetching
  - Error message if request fails
  - Data when successful
*/

export default function FetchWithStates() {
  const [usersData, setUsersData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  
    async function fetchData() {
    setLoading(true);
    try {
      const data = await fetch(`https://randomuser.me/ap`)  // i/?results=5
        .then(response => response.json());

        setUsersData(data.results);
        
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
      console.error(error);
      throw new Error('Failed to fetch data' + error);
    
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    {/*Conditional rendering*/}
      {loading === true && (
        <p>Loading...</p>
      )}

      {error && (
        <p>{error}</p>
      )};

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