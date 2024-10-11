import React from 'react';

type GreetingProps = {
  name: string;
  country: string;
};

const Greeting: React.FC<GreetingProps> = ({ name, country }) => {
  const isAdmin = name === 'Tony';

  if (isAdmin) {
    return <h1>Welcome, admin!</h1>
  }
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You're from {country}</p>
    </div>
  );
};

export default Greeting;