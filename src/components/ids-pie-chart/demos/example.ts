import componentsJSON from '../../../assets/data/items-single.json';

const setData = async () => {
  const res = await fetch(componentsJSON as any);
  const data = await res.json();
  const chart: any = document.querySelector('#index-example');
  if (chart) {
    chart.data = data;
  }
};

setData();
