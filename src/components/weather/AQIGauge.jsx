import { motion } from "framer-motion";

function AQIGauge({ value, status, color }) {

  const radius = 72;

  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(value, 300) / 300;

  const offset = circumference * (1 - progress);

  return (

    <div className="relative flex items-center justify-center">

      <svg
        width="180"
        height="180"
        className="-rotate-90"
      >
        <defs>

          <linearGradient
            id="aqiGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >

            <stop offset="0%" stopColor="#FFD84D" />

            <stop offset="55%" stopColor="#F6A54A" />

            <stop offset="100%" stopColor="#FF7E36" />

          </linearGradient>

          <filter id="aqiGlow">

            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>

              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />

            </feMerge>

          </filter>

        </defs>
        
        {/* Background */}

        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#33443F"
          strokeWidth="11"
          fill="transparent"
        />

        {/* Animated Ring */}

        <motion.circle

          cx="90"
          cy="90"
          r={radius}

          stroke="url(#aqiGradient)"

          filter="url(#aqiGlow)"
          
          strokeWidth="10"

          fill="transparent"

          strokeLinecap="round"

          strokeDasharray={circumference}

          initial={{
            strokeDashoffset: circumference,
          }}

          animate={{
            strokeDashoffset: offset,
          }}

          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}

        />

      </svg>

      <div className="absolute flex flex-col items-center text-center">

        <p className={`rounded-full px-3 py-1 text-xs font-medium ${color} bg-current/10`}>
          {status}
        </p>

        <h2 className="mt-3 text-6xl font-black tracking-tight text-primary">
          {value}
        </h2>

      </div>

    </div>

  );

}

export default AQIGauge;