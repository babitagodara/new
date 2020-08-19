import React from 'react';
import imgsrc from "../src/gilltelecom.jpg";





const Header = () => {
  return(
<>
<header><img src={imgsrc} className="img-fluid" alt="imgres" />
</header>
</>

  );
};

export default Header;