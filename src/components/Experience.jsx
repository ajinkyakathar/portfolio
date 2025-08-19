import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { experiences } from "../utils/data";

const Experience = () => {
  const experienceChartRef = useRef(null);

  useEffect(() => {
    if (experienceChartRef.current) {
      const experienceChart = echarts.init(experienceChartRef.current);
      const option = {
        animation: true,
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "#1f2937", // dark gray
          textStyle: {
            fontSize: 14,
            fontWeight: 500,
            color: "#fff",
          },
          borderWidth: 1,
          borderColor: "#4f46e5",
          padding: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          max: 5,
          axisLabel: {
            formatter: "{value} years",
            fontWeight: 600,
            fontSize: 14,
            color: "#4B5563", // Tailwind gray-600
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#E5E7EB", // Tailwind gray-200
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Codesis Technologies Pvt Ltd", "Freelancer", "DSG-US"],
          axisLabel: {
            fontWeight: "bold",
            fontSize: 15,
            color: "#111827", // Tailwind gray-900
          },
        },
        series: [
          {
            name: "Experience",
            type: "bar",
            data: [1.2, 0.11, 1.2],
            itemStyle: {
              color: "#4f46e5",
              borderRadius: [4, 4, 4, 4],
            },
            label: {
              show: true,
              position: "right",
              formatter: "{c} years",
              fontWeight: 600,
              fontSize: 14,
              color: "#4f46e5",
            },
          },
        ],
      };

      experienceChart.setOption(option);
      const handleResize = () => {
        experienceChart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        experienceChart.dispose();
      };
    }
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 3.3 years of experience building web applications and digital
            solutions for various industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-100 rounded-xl p-6 shadow-xl border border-gray-200">
            <div
              ref={experienceChartRef}
              style={{ height: "400px" }}
              className="w-full"
            ></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-indigo-600 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-indigo-600 mb-3">
                  {exp.company}
                </h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
