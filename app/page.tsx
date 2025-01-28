import Chart from "../components/Chart";
import Calendar from "../components/Calander";

import {
  BankOutlined,
  ClearOutlined,
  FileTextOutlined,
  HomeOutlined,
  TagOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

const menuItems = [
  {
    icon: <HomeOutlined style={{ fontSize: "1.5em" }} />,
    title: "Stays",
    color: "rgb(171, 54, 87)",
  },
  {
    icon: <ClearOutlined style={{ fontSize: "1.5em" }} />,
    title: "Cleanings",
    color: "rgb(171, 54, 87)",
  },
  {
    icon: <ToolOutlined style={{ fontSize: "1.5em" }} />,
    title: "Fixes",
    color: "rgb(171, 54, 87)",
  },
  {
    icon: <FileTextOutlined style={{ fontSize: "1.5em" }} />,
    title: "Materials",
    color: "rgb(171, 54, 87)",
  },
  {
    icon: <BankOutlined style={{ fontSize: "1.5em" }} />,
    title: "Back Office",
    color: "rgb(171, 54, 87)",
  },
  {
    icon: <TagOutlined style={{ fontSize: "1.5em" }} />,
    title: "Tickets",
    color: "rgb(171, 54, 87)",
  },
];

const page = () => {
  return (
    <div>
      <section className="w-full mb-6 sm:p-4">
        <div className=" mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border rounded-lg"
                bodyStyle={{ padding: "0.5rem" }}
              >
                <div className="flex flex-col items-center justify-center p-2 sm:p-4 space-y-2 sm:space-y-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Calendar />
        <Chart />
      </section>
    </div>
  );
};

export default page;
