"use client";
import React from "react";
// import AnimatedNumber from "react-animated-number";



const achievementsList = [
  {
    metric: "Tiempo desarrollando",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Líneas de código",
    value: "100000",
  },
  {
    metric: "Proyectos terminados",
    value: "7",
  },
  {
    metric: "Proyectos en marcha",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {/* <AnimatedNumber
                  value={parseInt(achievement.value)}
                  formatValue={n=>n.toFixed(0)}
                  style={{
                    transition: '0.8s ease-out',
                    fontSize: 48,
                    transitionProperty:
                        'background-color, color, opacity'
                }}
                
                duration={1000}
                 
                  className="text-white text-4xl font-bold"
                  
                /> */}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;