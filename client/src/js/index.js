//entry point

//import the form and submit logic in index.js so that it will be included in the bundle.
import  "./form";
import "./submit";

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Tread from '../images/tready.png';


window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('treadyThumbnail').src = Tread;
  });