import { Card } from "antd";

const Main = () => {
  const drName = localStorage.getItem("name");

  return (
    <div className="container">
      <Card>
        <div>
          <h2 className="text-3xl font-bold">Welcome Dr {drName}</h2>
        </div>
      </Card>
    </div>
  );
};

export default Main;
