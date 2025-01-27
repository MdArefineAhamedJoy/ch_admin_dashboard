import React from 'react';
import Calendar from './componets/shared/Calander';
import Chart from './componets/Chart';
import NavigationMenu from './componets/NavigationMenu';


const page = () => {
  return (
    <div>
      <NavigationMenu/>
      <Calendar/>
      <Chart/>
    </div>
  );
};

export default page;