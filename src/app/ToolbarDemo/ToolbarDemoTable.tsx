import * as React from 'react';
import './toolbar-demo.scss';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  SortByDirection
} from '@patternfly/react-table';

import { HiddenTableHeader } from '../CustomComponents/HiddenTableHeader/HiddenTableHeader';
import { DynamicList } from '../CustomComponents/DynamicList/DynamicList';
import { DynamicListList } from '../CustomComponents/DynamicList/DynamicListList';
import { DynamicListItem } from '../CustomComponents/DynamicList/DynamicListItem';

class ToolbarDemoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        'Category',
        'Branch',
        'Code',
        'Workspaces',
        'Custom component',
        {
          dataLabel: 'Link header',
          title: <HiddenTableHeader title="Links" />
        }
      ],
      rows: [
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 1</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
              props: {
                className: 'app-special-cell',
                dataLabel: '',
              }
            },
            '10',
            '25',
            '5',
            {
              title:
                // <DynamicList className="app-m-update-on-lg app-m-inline-on-md">
                <DynamicList className="">
                  <DynamicListList type="Role" id="dynamic-list-1">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 2</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
              props: {
                className: 'app-special-cell',
                dataLabel: '',
              }
            },
            '10',
            '25',
            '5',
            {
              title:
                // <DynamicList className="app-m-update-on-lg app-m-inline-on-md">
                <DynamicList className="">
                  <DynamicListList type="Role" id="dynamic-list-2">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
        {
          cells: [
            {
              title:
                <React.Fragment>
                  <div>Node 3</div>
                  <a href="#" target="_blank">siemer/test-space</a>
                </React.Fragment>,
              props: {
                className: 'app-special-cell',
                dataLabel: '',
              }
            },
            '10',
            '25',
            '5',
            {
              title:
                // <DynamicList className="app-m-update-on-lg app-m-inline-on-md">
                <DynamicList className="">
                  <DynamicListList type="Role" id="dynamic-list-3">
                    <DynamicListItem text="Read" />
                    <DynamicListItem text="Edit" />
                    <DynamicListItem text="Delete" />
                  </DynamicListList>
                </DynamicList>,
              props: {
                className: 'app-custom-cell',
              }
            },
            {
              title:
                <a href="#">Action</a>
            }
          ]
        },
      ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table
        aria-label="Simple Table"
        cells={columns}
        rows={rows}
        sortBy={sortBy}
        onSort={this.onSort}
        variant={TableVariant.compact}
        gridBreakPoint='grid-lg'
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { ToolbarDemoTable };