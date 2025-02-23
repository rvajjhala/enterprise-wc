import type IdsDataGrid from '../ids-data-grid';
import type IdsPopupMenu from '../../ids-popup-menu/ids-popup-menu';
import type IdsMenuItem from '../../ids-menu/ids-menu-item';
import '../ids-data-grid';
import type { IdsDataGridColumn } from '../ids-data-grid-column';
import { escapeHTML } from '../../../utils/ids-xss-utils/ids-xss-utils';
import booksJSON from '../../../assets/data/books.json';
import css from '../../../assets/css/ids-data-grid/custom-link.css';

const cssLink = `<link href="${css}" rel="stylesheet">`;
document.querySelector('head')?.insertAdjacentHTML('afterbegin', cssLink);

const dataGrid = document.querySelector<IdsDataGrid>('#data-grid-row-height')!;
const rowHeightMenu = document.querySelector<IdsPopupMenu>('#row-height-menu')!;

if (dataGrid) {
  // Change row height with popup menu
  rowHeightMenu?.addEventListener('selected', (e: Event) => {
    dataGrid.rowHeight = (e.target as IdsMenuItem).value as string;
  });

  // Setup datagrid
  (async function init() {
    // Do an ajax request
    const url: any = booksJSON;
    const columns: IdsDataGridColumn[] = [];

    // Set up columns
    columns.push({
      id: 'selectionCheckbox',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: dataGrid.formatters.selectionCheckbox,
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      align: 'center'
    });
    columns.push({
      id: 'selectionRadio',
      name: 'selection',
      sortable: false,
      resizable: false,
      formatter: dataGrid.formatters.selectionRadio,
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      align: 'center'
    });
    columns.push({
      id: 'rowNumber',
      name: '#',
      formatter: dataGrid.formatters.rowNumber,
      sortable: false,
      readonly: true,
      width: 56
    });
    columns.push({
      id: 'drilldown',
      name: '',
      sortable: false,
      resizable: false,
      formatter: dataGrid.formatters.button,
      icon: 'drilldown',
      type: 'icon',
      align: 'center',
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      click: (info: any) => {
        console.info('Drilldown clicked', info);
      },
      text: 'Drill Down',
      width: 56
    });
    columns.push({
      id: 'description',
      name: 'Text',
      field: 'description',
      sortable: true,
      formatter: dataGrid.formatters.text
    });
    columns.push({
      id: 'location',
      name: 'Hyperlink',
      field: 'location',
      formatter: dataGrid.formatters.hyperlink,
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      click: (info: any) => {
        console.info('Link clicked', info);
      },
      href: '#'
    });
    columns.push({
      id: 'ledger',
      name: 'Password',
      field: 'ledger',
      sortable: true,
      formatter: dataGrid.formatters.password
    });
    columns.push({
      id: 'publishDate',
      name: 'Date',
      field: 'publishDate',
      sortable: true,
      formatter: dataGrid.formatters.date,
      width: 100
    });
    columns.push({
      id: 'publishTime',
      name: 'Time',
      field: 'publishDate',
      sortable: true,
      formatter: dataGrid.formatters.time,
      width: 100
    });
    columns.push({
      id: 'price',
      name: 'Decimal',
      field: 'price',
      align: 'right',
      sortable: true,
      formatter: dataGrid.formatters.decimal,
      formatOptions: { locale: 'en-US' },
      width: 100
    });
    columns.push({
      id: 'price',
      name: 'Integer',
      field: 'price',
      align: 'right',
      sortable: true,
      formatter: dataGrid.formatters.integer,
      formatOptions: { locale: 'en-US' },
      width: 100
    });
    columns.push({
      id: 'inStock',
      name: 'Checkbox',
      field: 'inStock',
      align: 'center',
      sortable: false,
      formatter: dataGrid.formatters.checkbox,
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      width: 50
    });
    columns.push({
      id: 'badge',
      name: 'Badge',
      field: 'price',
      color: 'info',
      sortable: true,
      formatter: dataGrid.formatters.badge,
    });
    columns.push({
      id: 'more',
      name: 'Actions',
      sortable: false,
      resizable: true,
      formatter: dataGrid.formatters.button,
      icon: 'more',
      type: 'icon',
      align: 'center',
      disabled: (row: number, value: string, col: any, item: Record<string, any>) => item.book === 101,
      click: (info: any) => {
        console.info('Actions clicked', info);
      },
      text: 'Actions',
      width: 56
    });
    columns.push({
      id: 'custom',
      name: 'Custom',
      field: 'price',
      sortable: false,
      formatter: (rowData: Record<string, unknown>, columnData: Record<string, any>) => {
        const value = `Custom: ${rowData[columnData.field] || '0'}`;
        return `<span class="text-ellipsis">${value}</span>`;
      },
      width: 180
    });
    columns.push({
      id: 'custom',
      name: 'Custom Formatter',
      field: 'location',
      sortable: false,
      formatter: (rowData: Record<string, unknown>, columnData: Record<string, any>) => {
        const value = `${rowData[columnData.field] || ''}`;
        return `<a part="custom-link" href="#" class="text-ellipsis">${escapeHTML(value)}</a>`;
      },
      click: (info: any) => {
        console.info('Custom Link Clicked', info);
      },
      width: 180
    });
    columns.push({
      id: 'spacer',
      name: '',
      field: '',
      sortable: false
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
