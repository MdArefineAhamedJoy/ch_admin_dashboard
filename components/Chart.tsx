/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { date: 'Dec 2016', sales: 25000 },
  { date: 'Jan 2017', sales: 28000 },
  { date: 'Feb 2017', sales: 33000 },
  { date: 'Mar 2017', sales: 49000 },
  { date: 'Apr 2017', sales: 40000 },
  { date: 'May 2017', sales: 34000 },
  { date: 'Jun 2017', sales: 48000 },
  { date: 'Jul 2017', sales: 31000 },
  { date: 'Aug 2017', sales: 32000 },
  { date: 'Sep 2017', sales: 42000 },
  { date: 'Oct 2017', sales: 52000 },
  { date: 'Nov 2017', sales: 51000 },
  { date: 'Dec 2017', sales: 49000 },
];

const MetricCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-[#C7385C] rounded-lg p-4 text-white">
    <div className="flex items-center gap-2 text-sm opacity-90">
      <span className="text-white">$</span>
      <span>{title}</span>
    </div>
    <div className="text-2xl font-bold mt-1">{value}%</div>
  </div>
);

const Chart = () => {
  return (
    <div className="p-4 w-full mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <MetricCard title="Earnings" value="257" />
        <MetricCard title="Costs" value="257" />
        <MetricCard title="Net Profit" value="257" />
        <MetricCard title="Occupancy" value="257" />
        <MetricCard title="Rating" value="257" />
        <MetricCard title="Potential Earnings" value="257" />
      </div>
      <div className="flex justify-end mb-6">
        <select className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={{ stroke: '#E5E7EB' }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B7280' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: any) => `$${(value / 1000).toFixed(0)}k`}
              domain={[20000, 60000]}
              ticks={[20000, 30000, 40000, 50000, 60000]}
            />
            <Tooltip
              formatter={(value: any) => [`$${value.toLocaleString()}`, 'Sales']}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '4px',
                padding: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ fill: '#4F46E5', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;