import React from "react";
import scss from "./YandexMap.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const coord = [55.67179881583457, 37.319123271163924];
const placeText =
  "Россия, Московская область, Одинцовский район, деревня Вырубово, 5А";
const placeDiv = `<div style="width: 200px">${placeText}</div>`;

const YandexMap: React.FC = () => {
  return (
    <div className={scss.wrapper} onClick={(e) => e.stopPropagation()}>
      <YMaps>
        <Map
          defaultState={{
            center: coord,
            zoom: 17,
          }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          className={scss.map}
        >
          <Placemark
            key={"invite-location"}
            geometry={coord}
            properties={{
              balloonContentBody: placeDiv,
              clusterCaption: placeDiv,
              hintContent: placeText,
              balloonContent: '<div id="driver-2" class="driver-card"></div>',
            }}
            options={{
              preset: "islands#violetIcon",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;
