import React, { useEffect } from 'react';


export default (props) => {
  useEffect( () => {
    // (async () => {
    //   const dbres = await fetch('http://localhost:3000/api/reviews');
    //   console.log(dbres, 'dbres');
    // })();
    fetch('http://localhost:3000/api/reviews').then((dbres) => console.log(dbres));
  }, []);

  return (
    <div>
      reviews sectionnnn
    </div>
  );
};