import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Действия котов", "количество опрошенных котов в шт"],
  ["Едят", 40],
  ["Спят", 250],
  ["Неизвестно", 60],
];

export const options = {
  title: "Чем занимаются коты?",
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
