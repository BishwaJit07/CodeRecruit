import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Assi 1", Number: 58 },
  { name: "Assi 2", Number: 60 },
  { name: "Assi 3", Number: 60 },
  { name: "Assi 4", Number: 58 },
  { name: "Assi 5", Number: 50 },
  { name: "Assi 6", Number: 51 },
  { name: "Assi 7", Number: 60 },
  { name: "Assi 8", Number: 50 }
];

export default function Statistics() {
  return (
    <div className="text-center">
      <p className="text-blue-300 font-bold text-3xl mt-6">Assignment Numbers using Area Chart</p>
      <div className="flex justify-center mt-5">
        <AreaChart width={500} height={400} data={data} margin={{ top: 20, right: 80, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  stroke="white"/>
          <YAxis  stroke="white"/>
          <Tooltip />
          <Area type="monotone" dataKey="Number" stroke="#6ECB63" fill="#6ECB63" />
        </AreaChart>
      </div>
    </div>
  );
}
