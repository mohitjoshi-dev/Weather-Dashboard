import { motion } from "framer-motion";

const BANDS = [
  { max: 50, color: "#6fcf75" }, // Good
  { max: 100, color: "#f2c94c" }, // Moderate
  { max: 150, color: "#eb9a3f" }, // Unhealthy for sensitive groups
  { max: 200, color: "#e0603f" }, // Unhealthy
  { max: 300, color: "#9f5cc0" }, // Very unhealthy
  { max: 500, color: "#7a3b3b" }, // Hazardous
];

    const CX = 150;
    const CY = 150;
    const RADIUS = 110;
    const START_ANGLE = -135;
    const SWEEP = 270;
    const SEGMENT_GAP = 2; 

function polarToCartesian(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function describeArc(startAngle, endAngle, radius) {
  const start = polarToCartesian(startAngle, radius);
  const end = polarToCartesian(endAngle, radius);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}


function getPointerAngle(value) {
  const segmentAngle = SWEEP / BANDS.length;
  const clamped = Math.max(0, Math.min(value, 500));

  let bandIndex = BANDS.findIndex((b) => clamped <= b.max);
  if (bandIndex === -1) bandIndex = BANDS.length - 1;

  const bandMin = bandIndex === 0 ? 0 : BANDS[bandIndex - 1].max;
  const bandMax = BANDS[bandIndex].max;
  const fraction = (clamped - bandMin) / (bandMax - bandMin);

  const segStart = START_ANGLE + bandIndex * segmentAngle;
  const segEnd = segStart + segmentAngle - SEGMENT_GAP;

  return segStart + fraction * (segEnd - segStart);
}

function AQIGauge({ value, status, color }) {
  const segmentAngle = SWEEP / BANDS.length;
  const pointerAngle = getPointerAngle(value);
  const pointerInner = polarToCartesian(pointerAngle, RADIUS - 16);
  const pointerOuter = polarToCartesian(pointerAngle, RADIUS + 16);

  
  return (
    
    <div className="relative flex items-center justify-center">
      
      <svg width="190" height="190" viewBox="0 0 300 300">
        {BANDS.map((band, i) => {
          const segStart = START_ANGLE + i * segmentAngle;
          const segEnd = segStart + segmentAngle - SEGMENT_GAP;

          return (
            <motion.path
              key={band.max}
              d={describeArc(segStart, segEnd, RADIUS)}
              stroke={band.color}
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          );
        })}

        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          
          <line
            x1={pointerInner.x}
            y1={pointerInner.y}
            x2={pointerOuter.x}
            y2={pointerOuter.y}
            stroke="currentColor"
            className="text-foreground"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <circle cx={pointerOuter.x} cy={pointerOuter.y} r="5" fill="currentColor" className="text-foreground" />
        
        </motion.g>

        <text
          x={CX}
          y={CY - 5}
          textAnchor="middle"
          fontSize="64"
          fontWeight="600"
          className="fill-primary"
        >
          {value}
        </text>
      
        <text
          x={CX}
          y={CY + 35}
          textAnchor="middle"
          fontSize="20"
          letterSpacing="2"
          className="fill-muted-foreground"
        >
          AQI
        </text>
      </svg>

      <div className="absolute -bottom-5 flex flex-col items-center text-center">
        
        <p   className={`rounded-full px-5 py-2 text-sm font-semibold ${color} bg-current/10 shadow-lg`}>
          {status}
        </p>
      </div>
    </div>
  );
}

export default AQIGauge;