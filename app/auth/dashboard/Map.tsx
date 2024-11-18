"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const Map = () => {

    const customIcon = L.divIcon({
        html: ` <div style="position: relative;">
        <div style="background-color: transparent; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #f50000; width: 16px; height: 16px; border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -0.5px; left: 50%; transform: translateX(-24.5%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid #f50000;"></div>
        </div>
        </div>`,
        className: 'custom-icon', // Optional: Add a custom class for additional styling
        iconSize: [20, 20], // Adjust size if needed
    })

    return (
        <div className='rounded-xl overflow-clip h-full w-full'>
            <MapContainer
                center={[51.505, -0.09]} // Set the center of the map
                zoom={13} // Zoom level
                scrollWheelZoom={true}
                style={{ width: '100%', height: '100%' }} // Set width and height
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker icon={customIcon} position={[51.505, -0.09]}>
                    <Popup>A pretty CSS3 popup. <br />Easily customizable.</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map