import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Profile Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(1)}>SetCount</button>
    </div>
  );
};

export default Profile;
