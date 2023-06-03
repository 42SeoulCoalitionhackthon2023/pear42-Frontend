import { Inter } from 'next/font/google';
import styles from '/styles/Statistics.module.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
	{name: 'Page A', uv: 400},
	{name: 'Page B', uv: 200},
	{name: 'Page C', uv: 310},
	{name: 'Page D', uv: 130},
	{name: 'Page E', uv: 623},
];

export default function Statistics() {
  return <div className={styles.main}>
		<LineChart width={600} height={300} data={data}>
			<Line type="monotone" dataKey="uv" stroke="blue" />
			<CartesianGrid stroke="#494949" />
			<XAxis dataKey="name" />
			<YAxis />
		</LineChart>
	</div>;
}
