import React from 'react';

type GreetingProps = {
  name: string;
  country: string;
};

const Greeting: React.FC<GreetingProps> = ({ name, country }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h1>You're from {country}</h1>
    </div>
  );
};

export default Greeting;