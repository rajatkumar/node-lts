import React, { Component } from 'react';

class Tag extends Component {
    render() {
        if (this.props && this.props.value === '-') {
            return <div />;
        } else {
            return (
                <span className="tag is-primary is-medium">
                    {this.props.value}
                </span>
            );
        }
    }
}

class BoxTable extends Component {
    render() {
        const rows = this.props ? this.props.data || [] : [];
        return (
            <div className="box">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>
                                <abbr title="V">Version</abbr>
                            </th>
                            <th>
                                <abbr title="LTS">LTS Start Date</abbr>
                            </th>
                            <th>
                                <abbr title="Maint Start Date">
                                    Maintenance Start Date
                                </abbr>
                            </th>
                            <th>
                                <abbr title="Maint End Date">
                                    Maintenance End Date
                                </abbr>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => {
                            return (
                                <tr
                                    key={row.version}
                                    className="has-text-centered"
                                >
                                    <td>
                                        <div className="is-size-3">
                                            Node.JS {row.version}
                                        </div>
                                    </td>
                                    <td>
                                        <Tag value={row.ltsStart} />
                                    </td>
                                    <td>
                                        <Tag value={row.maintenanceStart} />
                                    </td>
                                    <td>
                                        <Tag value={row.endOfLife} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BoxTable;
