import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function MatchRadar({ score }) {
  const data = [
    { axis: "Keyword Match", value: score },
    { axis: "Skill Coverage", value: score + 10 > 100 ? 100 : score + 10 },
    { axis: "ATS Readiness", value: score > 80 ? 98 : score > 60 ? 85 : 65 },
    { axis: "Experience Fit", value: score },
    { axis: "Optimization", value: score > 70 ? 95 : 70 },
  ];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data}>
        <PolarGrid stroke="#444" />
        <PolarAngleAxis dataKey="axis" tick={{ fill: '#ccc', fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#888' }} />
        <Radar name="Score" dataKey="value" stroke="#8b5cf6" fill="#a78bfa" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
