import React, { useState, useEffect } from 'react';
import Banner from './Banner';

const App = () => {
  let [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) setIsShow(true);
  }, []);

  return (
    <div className='body'>
      { isShow && <Banner onClose={() => setIsShow(false)}/> }
    </div>
  );
}

export default App;
