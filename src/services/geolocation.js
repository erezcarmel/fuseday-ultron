const geolocation = navigator.geolocation;

export default function getGeoLocation() {
    return new Promise((resolve, reject) => {
        if(geolocation) {
	        geolocation.getCurrentPosition(data => {
	            const {latitude, longitude} = data.coords || {};
	            resolve({latitude, longitude});
            }, reject);
        } else {
            reject('no geo location support');
        }
    });
}