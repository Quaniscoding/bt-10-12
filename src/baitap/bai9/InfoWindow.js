import React from 'react';
import { InfoWindow } from '@react-google-maps/api';

const InfoWindowComponent = ({ selected, onClose }) => {
    return (
        <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={onClose}
        >
            <div>
                <h2>Vị trí được chọn</h2>
                <p>Thời gian: {selected.time.toLocaleString()}</p>
                <p>Tọa độ: {`Lat: ${selected.lat}, Lng: ${selected.lng}`}</p>
            </div>
        </InfoWindow>
    );
};

export default InfoWindowComponent;
