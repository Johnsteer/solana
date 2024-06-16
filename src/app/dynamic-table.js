/**
 *  TODO
 *  - Add logic to handle data types of values and render properly
 * 
 */


export default function DynamicTable (props) {
    
    if (props.tabledata === undefined) {
        return (
            <p>No Data</p>
        );
    } else {
        const obj_tabledata = JSON.parse(props.tabledata);

        let columns = [];
        let rows = [];
        
        /*
        Todo - Fix process below.
        How to render table?
        - Split logic of rendering inital table and adding rows.
        - Think about user experience
        - how to capture state of table rows
        - build MongoDB backend, fetch table data from there
            - check if exists in db
                - if yes serve rom db
                - if no write to db then serve from db
        */
        for (const [key, value] of Object.entries(obj_tabledata)) {
            if (key !== "data") {
                columns.push(key);
                
                let row = [];
                if (typeof(value) === "object") {
                    row.push(JSON.stringify(value));
                };
                if (typeof(value) === "PublicKey") {
                    row.push(value.toString());
                };
                row.push(value);
            };
        };

        console.log("row variable", rows);

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
                        rows.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        row.map((item, index) => {
                                            return (
                                                <td key={index}>{item}</td>
                                            ) 
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    };
};