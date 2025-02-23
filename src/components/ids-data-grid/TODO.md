# Ids Data grid TODOs

Keep in sync with https://github.com/infor-design/enterprise-wc/issues/555

## Major

- [x] Hidden Columns
- [x] Column Sizes/Widths
- [x] Column Reorder
- [x] Frozen Columns
- [ ] Place popupmenu in the root of the grid so it will not be cut off
- [ ] Formatters left: Tag, Alerts, Image, Favorite, Card (templates), Targeted Achievement etc, Multi Button
- [x] Fix icon and field sizes on http://localhost:4300/ids-data-grid/filter.html
- [x] Save Settings [example](https://main-enterprise.demo.design.infor.com/components/datagrid/test-save-settings.html)
- [x] Expandable Row [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-expandable-row.html)
- [x] Empty Message [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-empty-message.html)
- [ ] Export Csv and Xls [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-export-from-button.html)
- [x] Grouped Headers [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-grouped-headers.html)
- [ ] Toolbar [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-custom-toolbar.html)
- [x] Editors / Editing / Dirty [example](https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html) including https://github.com/infor-design/enterprise/issues/6338 and a way to veto selection [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-beforeselect-veto.html)
- [ ] Keyboard Navigation (included tabbable/not tabbable) see [standards](https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-for-layout-grids) (actionable mode, X cell navigation, X row navigation)
- [x] More Accessibility see [standards](https://design.infor.com/code/ids-enterprise/latest/listview#accessibility)
- [ ] Disabled Rows [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-disabled-rows.html) test on http://localhost:4300/ids-data-grid/columns-formatters.html with disabled checkboxes
- [ ] Grouped Rows [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-grouping-filter.html)
- [x] Tooltips [example](https://main-enterprise.demo.design.infor.com/components/datagrid/tooltips.html)
- [x] Tree [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-tree.html)
- [x] Text align headers and cells [example](https://main-enterprise.demo.design.infor.com/components/datagrid/test-alerts-right-align.html)
- [x] Css class/Colors
- [x] Custom Formatters and Editors Example
- [ ] Select across pages is buggy on http://localhost:4300/ids-data-grid/pagination-client-side.html
- [x] Context Menu

## Minor

- [ ] Row Reorder [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-row-reorder.html)
- [ ] Keyword Search [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-keyword-search.html)
- [ ] Nested Datagrid [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-nested-grids.html)
- [x] Editor Placeholder [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-placeholder.html)
- [ ] Contextual Toolbar
- [ ] Paste/Copy from Excel [example](https://main-enterprise.demo.design.infor.com/components/datagrid/test-copy-paste-from-excel.html)
- [ ] Summary Row [example](https://main-enterprise.demo.design.infor.com/components/datagrid/test-summary-row-pager.html)
- [x] Automation id's
- [x] Errors and Validation
- [x] Xss Tests
- [ ] Colspans [example](https://main-enterprise.demo.design.infor.com/components/datagrid/example-colspan.html)
- [ ] Column Groups with Frozen Columns
- [x] Optimize the row recycling in virtual scroll (load from top or bottom only)
- [ ] Row Span Feature
- [x] Change left and right padding (start and end) for row-heights
- [ ] Tree Grid Lazy Loading Child Rows
- [ ] Virtual Scroll with Frozen Columns
- [ ] On tree grid if you de-select some child rows - should show as partial.
- [ ] deepClone cant copy regexes (if ever needed example `mask: [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/]`)
