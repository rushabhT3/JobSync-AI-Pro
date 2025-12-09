// components/RadarChart.tsx (or .tsx)
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function MatchRadar({ score }) {
  const data = [
    { axis: 'Keywords',    value: score },
    { axis: 'Skills',      value: Math.min(score + 12, 100) },
    { axis: 'Experience',  value: Math.min(score + 8, 100) },
    { axis: 'ATS Score',   value: score > 85 ? 98 : score > 65 ? 88 : 72 },
    { axis: 'Overall Fit', value: score },
  ];

  return (
    <ResponsiveContainer width="100%" height={240}>
      <RadarChart data={data}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis dataKey="axis" tick={{ fill: '#4b5563', fontSize: 11 }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
        <Radar name="Match" dataKey="value" stroke="#0E3F35" fill="#E88B7D" fillOpacity={0.85} />
      </RadarChart>
    </ResponsiveContainer>
  );
}