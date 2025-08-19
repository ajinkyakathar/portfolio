import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Tooltip, Progress } from "antd";
import { skills } from "../utils/data";

const Skills = () => {
  const skillsChartRef = useRef(null);

  useEffect(() => {
    if (skillsChartRef.current) {
      const skillsChart = echarts.init(skillsChartRef.current);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: "JavaScript", max: 100 },
            { name: "React", max: 100 },
            { name: "Node.js", max: 100 },
            { name: "HTML/CSS", max: 100 },
            { name: "UI/UX Design", max: 100 },
            { name: "Python", max: 100 },
          ],
          radius: 130,
          splitNumber: 4,
          axisName: {
            color: "#333",
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [90, 95, 85, 95, 80, 75],
                name: "Skills",
                areaStyle: {
                  color: "rgba(79, 70, 229, 0.6)",
                },
                lineStyle: {
                  color: "rgba(79, 70, 229, 0.8)",
                  width: 2,
                },
                itemStyle: {
                  color: "#4f46e5",
                },
              },
            ],
          },
        ],
      };
      skillsChart.setOption(option);
      const handleResize = () => {
        skillsChart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        skillsChart.dispose();
      };
    }
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I've mastered
            throughout my career.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Tooltip key={index} title={`${skill.name}: ${skill.level}%`}>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                  <i
                    className={`${skill.icon} text-4xl text-indigo-600 mb-4`}
                  ></i>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {skill.name}
                  </h3>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor="#4f46e5"
                    showInfo={false}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
            <div
              ref={skillsChartRef}
              style={{ height: "400px" }}
              className="w-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 