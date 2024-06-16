'use client'
import styles from "./page.module.css";
import NavBar from "../navbar";
import DynamicTable from "../dynamic-table";
import {useState, useEffect, useRef} from "react";


export default function Home() {
    const web3 = require("@solana/web3.js");

    const [data, setData] = useState();
    const inputRef = useRef();

    async function fetchAccountInfo(address) {
        const solana = new web3.Connection("https://docs-demo.solana-mainnet.quiknode.pro/");
        const publicKey = new web3.PublicKey(address);
        const response = await solana.getAccountInfo(publicKey);




        setData(() => {
            return response;
        });
        console.log("updated sate of: data");
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            fetchAccountInfo(inputRef.current.value);
            event.preventDefault();
        }
      };

    const handleClick = () => {
        fetchAccountInfo(inputRef.current.value);
    };


    console.log("data value before render", data);
    return (
        <div>
        <NavBar />
            <div>
                <div>
                    <h1 className={styles.button}>Solana Account Info</h1>
                    <input ref={inputRef} id="Address" type="text" placeholder="Enter a Solana Address" onKeyDown={handleKeyPress}>
                    </input>
                    <button id="AddressBtn" type="button" onClick={handleClick}>Enter</button>
                </div>
                <div>
                    <h1>Account Info</h1>
                    <DynamicTable tabledata = {JSON.stringify(data)}/>
                </div>
            </div>
        </div>
    );
}