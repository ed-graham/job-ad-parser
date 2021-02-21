import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        console.log('inside useEffect()');
        setIsLoaded(true);
    }, [])

    console.log('outside useEffect');
    if (!isLoaded) {
        console.log('Loading ...');
        return <div>Loading...</div>;
      } else {    
    console.log('Loaded');
      return (
        <ul>
<li>Sheee-ite</li>
        </ul>
      );
  }
}

  export default MyComponent;