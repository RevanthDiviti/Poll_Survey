import { cardActionAreaClasses } from '@mui/material';
import Card from 'antd/es/card/Card';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { category: 'YSRCP', value: 40 },
  { category: 'Neutral', value: 10 },
  { category: 'TDP', value: 15 },
  { category: 'JSP', value: 20 },
  { category: 'BJP', value: 10 },
  { category: 'CONGRESS', value: 5 },
];

const COLORS = ['#0E8622', '#0C4491', '#FCD12A','#FF0000','#F47216','#006F82'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload[0]) {
    const { value, payload: dataPayload } = payload[0];
    if (dataPayload && dataPayload.category) {
      return (
        <div style={{ background: 'white', border: '1px solid #ddd', padding: '10px' }}>
          <p>{` ${value} (${dataPayload.category})`}</p>
        </div>
      );
    }
  }
  return null;
};

const Pie2 = () => {
  
 
  return (
    <Card title=" Voter Pulse" style={{ width: 415, marginTop: 16 ,marginLeft:30}}>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="53%"
          cy="50%"
          innerRadius="0%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          
          ))
}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          formatter={(value, entry) => <span style={{ color: entry.color }}>{value}</span>}
          payload={data.map((entry, index) => ({
            value: entry.category,
            type: 'Circle',
            id: entry.category,
            color: COLORS[index],
          }))}
        />
          <Legend />
      </PieChart>
    </ResponsiveContainer>
    </Card>
  );
};

export default Pie2;