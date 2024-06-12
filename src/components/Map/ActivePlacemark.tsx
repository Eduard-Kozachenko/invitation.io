const A = () => {
  return <></>;
};
// import React, { useEffect, useRef } from 'react';
// import { YMapsApi, TemplateLayoutFactory, Placemark } from 'yandex-maps-react';

// interface ActivePlacemarkProps {
//   balloonContent: React.ReactNode;
//   options?: Record<string, any>;
//   ymaps: YMapsApi;
//   geometry: number[];
// }

// const makeLayout = (
//   layoutFactory: TemplateLayoutFactory,
//   component: React.FC<{ balloonContent: React.ReactNode }>,
//   contentKey: string
// ) => {
//   const Layout = layoutFactory.createClass('<div></div>', {
//     build: function() {
//       Layout.superclass.build.call(this);

//       Layout.updateReactTree = () => ReactDOM.unstable_renderSubtreeIntoContainer(
//         component,
//         <div>{component.props[contentKey]}</div>,
//         this.getElement().querySelector('div'),
//       );

//       Layout.updateReactTree();
//     },
//     clear: function() {
//       Layout.updateReactTree = null;
//       Layout.superclass.clear.call(this);
//     },
//   });

//   return Layout;
// };

// const ActivePlacemark: React.FC<ActivePlacemarkProps> = ({
//   balloonContent,
//   options,
//   ymaps,
//   geometry,
// }) => {
//   const balloonLayoutRef = useRef<any>(null);

//   useEffect(() => {
//     balloonLayoutRef.current = makeLayout(
//       ymaps.templateLayoutFactory, ActivePlacemark, 'balloonContent'
//     );
//   }, [ymaps, ActivePlacemark]);

//   useEffect(() => {
//     if (balloonLayoutRef.current && balloonLayoutRef.current.updateReactTree) {
//       balloonLayoutRef.current.updateReactTree();
//     }
//   }, [balloonContent]);

//   return (
//     <Placemark
//       geometry={geometry}
//       options={{
//         balloonContentLayout: balloonLayoutRef.current,
//         balloonPanelMaxMapArea: 0,
//         ...options,
//       }}
//     />
//   );
// };

// export default ActivePlacemark;
