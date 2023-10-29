import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './av.css';



function AVComponent() {

  return (
<div className="App">
  <div>
 <iframe src="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf" width="100%" height="500px" />
 </div>
  {/* <object data="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf" type="application/pdf" width="100%" height="1200px">
    <p><a href="https://webgl0.s3.eu-west-2.amazonaws.com/Audio+Visual+System+Guide.pdf">You can click here to download the PDF file.</a></p>
</object> */}

  {/* <object width="100%"  data="" type="application/pdf">
  </object> */}
 </div>


  );
}

export default AVComponent;



// className='d-none'



