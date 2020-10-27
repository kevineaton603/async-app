import { useEffect, useState } from "react"


const useGeolocation = () => {
    const [] = useState({});

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
