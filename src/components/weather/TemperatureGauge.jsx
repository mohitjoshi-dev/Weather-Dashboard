// import {
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from "react-circular-progressbar";

// import "react-circular-progressbar/dist/styles.css";

// function TemperatureGauge() {
//   const temperature = 31;
//   const maxTemp = 45;

//   return (
//     <div className="w-56 h-56">
//       <CircularProgressbarWithChildren
//         value={temperature}
//         maxValue={maxTemp}
//         strokeWidth={8}
//         styles={buildStyles({
//           pathColor: "#DE9448",
//           trailColor: "#1C342E",
//         })}
//       >
//         <div className="text-center">
//           <h1 className="text-6xl font-bold text-foreground">
//             {temperature}°
//           </h1>

//           <p className="text-sm text-muted-foreground mt-2">
//             Current Temp
//           </p>
//         </div>
//       </CircularProgressbarWithChildren>
//     </div>
//   );
// }

// export default TemperatureGauge;