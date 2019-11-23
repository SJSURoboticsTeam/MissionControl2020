/**
  * @param {string} addressAndPort The address and port of your 
  * ESP32/Mock Server. Example: addressAndPort="127.0.0.1:8000"
	* @param {object} data The data to be sent.
*/
import formatObject from "./format.js";

function xhrError() {
  // Placeholder error function. To be replaced eventually.
  // console.log("Error: sending XHR Failed.");
}

export default function sendXHR(addressAndPort, endpoint, data,
  callbackFunction = () => { }) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("error", xhrError);
  const params = data ? formatObject(data) : undefined;
  
  xhr.open("POST", `http://${addressAndPort}/${endpoint}?${params}`);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      callbackFunction(xhr.responseText);
    }
  };

  xhr.send();
}
