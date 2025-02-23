import componentsJSON from '../../../assets/data/components.json';

const url = componentsJSON;
const setData = async () => {
  const res = await fetch(url as any);
  const data = await res.json();

  const chart = document.querySelector('#index-example');
  if (chart) {
    (chart as any).data = data;
  }
};

setData();
