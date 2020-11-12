import React, { useEffect } from 'react';


export default (props) => {
  useEffect( () => {
    (async () => {
      const dbres = await fetch('http://localhost:3000/api/reviews').then((res) => res.json());
      console.log(dbres);
    })();
  }, []);

  return (
    <div>
      reviews sectionnnn
    </div>
  );
};