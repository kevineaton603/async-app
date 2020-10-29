import { useEffect } from "react"


const useGeolocation = () => {

    useEffect(() => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude);
            });
          } else {
            /* geolocation IS NOT available */
          }
    }, [])
} 

export default useGeolocation;
