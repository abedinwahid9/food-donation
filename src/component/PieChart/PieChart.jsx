import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getStoredDonateData } from "../Utility/LocalStorage";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="md:text-2xl text-lg"
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieCharts = (dataLength) => {
  const storeData = getStoredDonateData().length;

  const storeDataLengthP = storeData;
  const dataLengthP = dataLength.dataLength - storeDataLengthP;

  console.log(dataLengthP);
  console.log(storeDataLengthP);

  const data = [
    { name: "Group A", value: dataLengthP },
    { name: "Group B", value: storeDataLengthP },
  ];

  return (
    <div className="flex justify-center">
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
              data={data}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieCharts;
