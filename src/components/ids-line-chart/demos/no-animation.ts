import IdsLineChart from '../ids-line-chart';
import componentsJSON from '../../../assets/data/components.json';

const setData = async () => {
  const res = await fetch(componentsJSON as any);
  const data = await res.json();
  const chart: IdsLineChart | any = document.querySelector('#no-animation-example');
  if (chart) {
    chart.data = data;
  }
};

setData();
