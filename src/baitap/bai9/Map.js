import React, { useState } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useLoadScript,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "500px",
};
const center = {
    lat: 10.8231,
    lng: 106.6297,
};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA6qZkVW1HBdavCKtykV3db0XwRHM4e7Ck",
        libraries,
    });

    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = (event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    };

    if (loadError) return <div>Lỗi khi tải bản đồ!</div>;
    if (!isLoaded) return <div>Đang tải bản đồ...</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            onClick={onMapClick}
        >
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => setSelected(marker)}
                />
            ))}

            {selected ? (
                <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => setSelected(null)}
                >
                    <div>
                        <h2>Vị trí được chọn</h2>
                        <p>Thời gian: {selected.time.toLocaleString()}</p>
                    </div>
                </InfoWindow>
            ) : null}
        </GoogleMap>
    );
};

export default Map;
