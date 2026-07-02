import { motion } from "framer-motion";

function AQIGauge({ value = 55 }) {

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

        {/* Background */}

        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#31453E"
          strokeWidth="10"
          fill="transparent"
        />

        {/* Animated Ring */}

        <motion.circle

          cx="90"
          cy="90"
          r={radius}

          stroke="#F6A54A"

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

      <div className="absolute text-center">

        <p className="text-sm text-muted-foreground">
          Moderate
        </p>

        <h2 className="mt-2 text-5xl font-bold text-primary">
          {value}
        </h2>

      </div>

    </div>

  );

}

export default AQIGauge;