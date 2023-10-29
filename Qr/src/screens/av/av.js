import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './av.css';



function AVComponent() {

  return (
<div className="App">
<iframe frameborder="0"
 width="640" height="480"
 src="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf"></iframe>
{/* <object data="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf"  type="application/pdf">
  <embed src="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf" type="application/pdf" />
</object> */}
<button>btn</button>

  {/* <object width="100%"  data="" type="application/pdf">
  </object> */}
 </div>


  );
}

export default AVComponent;



// className='d-none'



