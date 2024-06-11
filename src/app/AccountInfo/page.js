'use client'
import styles from "./page.module.css";
import {useState, useEffect} from "react";


export default function Home() {
    const web3 = require("@solana/web3.js");
    const publicKey = new web3.PublicKey(
        "7cVfgArCheMR6Cs4t6vz5rfnqd56vZq4ndaBrY5xkxXy"
        );

    const [data, setData] = useState();
    const [count, setCount] = useState(0);

    async function fetchAccountInfo() {
        const solana = new web3.Connection("https://docs-demo.solana-mainnet.quiknode.pro/");
        const response = await solana.getAccountInfo(publicKey);
        console.log("Respose Type:", typeof(response));
    }
    
    useEffect(() => {
        fetchAccountInfo()
    },[])

    return (
        <div>
            <div>
                <h1 className={styles.button}>Solana Account Info</h1>
                <input type="text" placeholder="Enter a Solana Address"></input>
                <button type="button" onClick={() => setCount(count + 1)}>Enter</button>
                <p>{count} clicks</p>
            </div>
            <div>
                <h1>Account Info</h1>
                <p>{JSON.stringify(data)}</p>
            </div>
        </div>

        
    );
}