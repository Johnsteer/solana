/**
 *  TODO
 *  - Add logics to handle data types of values and render propertly
 * 
 */


export default function DynamicTable (props) {
    if (props.tabledata === undefined) {
        return (
            <p>No Data</p>
        )
    }
    
    let columns = [];
    let rows = [];
    
    for (const [key, value] of Object.entries(props.tabledata)) {
        if (key !== "data") {
            columns.push(key);
            rows.push(value);
        }

    }

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                    {
                    columns.map((col) => {
                        return (
                            <th>{col}</th>
                        )
                    })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row) => {
                        return (
                            <tr>
                                <td>{row}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )




};