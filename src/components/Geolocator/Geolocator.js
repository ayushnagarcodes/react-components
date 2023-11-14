import { useState } from "react";
import "./Geolocator.css";

export default function Geolocator() {
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const [coords, setCoords] = useState({});
    const [clickCount, setClickCount] = useState(0);

    function handleGetLocation() {
        setClickCount((clickCount) => clickCount + 1);
        setIsLoading(true);
        setErr("");

        if (!navigator.geolocation)
            return setErr("Your browser does not support geolocation");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
                setIsLoading(false);
            },
            (error) => {
                setErr(error.message);
                setIsLoading(false);
            }
        );
    }

    return (
        <div className="container">
            <button onClick={handleGetLocation}>Get my position</button>

            {err && <p>{err}</p>}

            {isLoading && <p>Loading position...</p>}

            {!isLoading && !err && clickCount > 0 && (
                <p>
                    Your GPS position:{" "}
                    <a
                        href={`https://www.openstreetmap.org/#map=16/${coords.lat}/${coords.long}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {coords.lat}, {coords.long}
                    </a>
                </p>
            )}

            <p>You requested position {clickCount} times</p>
        </div>
    );
}
