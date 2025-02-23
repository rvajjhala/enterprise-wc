import type IdsDataGrid from '../ids-data-grid';
import '../ids-data-grid';
import type { IdsDataGridColumn } from '../ids-data-grid-column';
import booksJSON from '../../../assets/data/books.json';

// Example for populating the DataGrid
const dataGrid = document.querySelector<IdsDataGrid>('#data-grid-columns-fixed')!;

if (dataGrid) {
  (async function init() {
    // Do an ajax request
    const url: any = booksJSON;
    const columns: IdsDataGridColumn[] = [];

    // Set up columns
    columns.push({
      id: 'drilldown',
      name: '',
      sortable: false,
      resizable: false,
      formatter: dataGrid.formatters.button,
      icon: 'drilldown',
      type: 'icon',
      align: 'center',
      text: 'Button',
      width: 56
    });
    columns.push({
      id: 'description',
      name: 'Description',
      field: 'description',
      sortable: true,
      resizable: true,
      formatter: dataGrid.formatters.text,
      width: 200
    });
    columns.push({
      id: 'ledger',
      name: 'Ledger',
      field: 'ledger',
      sortable: true,
      resizable: true,
      formatter: dataGrid.formatters.text,
      hidden: true,
      width: 200
    });
    columns.push({
      id: 'publishDate',
      name: 'Pub. Date',
      field: 'publishDate',
      sortable: true,
      resizable: true,
      formatter: dataGrid.formatters.date,
      width: 200
    });
    columns.push({
      id: 'publishTime',
      name: 'Pub. Time',
      field: 'publishDate',
      sortable: true,
      resizable: true,
      formatter: dataGrid.formatters.time,
      width: 200
    });
    columns.push({
      id: 'price',
      name: 'Price',
      field: 'price',
      align: 'right',
      sortable: true,
      resizable: true,
      formatter: dataGrid.formatters.decimal,
      formatOptions: { locale: 'en-US' },
      width: 200
    });
    columns.push({
      id: 'spacer',
      name: '',
      field: '',
      sortable: false,
      resizable: true,
    });

    dataGrid.columns = columns;
    const setData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      dataGrid.data = data;
    };

    setData();
  }());
}
