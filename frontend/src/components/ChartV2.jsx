import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: '2024-01-01',
    price: 4000,
    volume: 2400,
  },
  {
    name: 'Fe2024-01-02',
    price: 3000,
    volume: 1398,
  },
  {
    name: '2024-01-03',
    price: 9800,
    volume: 2000,
  },
  {
    name: '2024-01-04',
    price: 3908,
    volume: 2780,
  },
  {
    name: '2024-01-05',
    price: 4800,
    volume: 1890,
  },
  {
    name: '2024-01-06',
    price: 3800,
    volume: 2390,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Price:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Volume:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const ChartV2 = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={salesData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#3b82f6" />
        <Line type="monotone" dataKey="volume" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartV2;
