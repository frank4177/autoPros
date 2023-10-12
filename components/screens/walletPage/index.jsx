"use client";

import { useState } from "react";
import Web3 from "web3";

export default function WalletPageScreen() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setloading] = useState(false);

  // Asynchronous function to connect the user's wallet.
  const connectWallet = async () => {
    // Setting the loading state to 'true' to display a loading message.
    setloading(true);
    try {
      // Checking if the 'window.ethereum' object is available (MetaMask or similar Ethereum provider).
      if (window.ethereum) {
        // Requesting the user's Ethereum accounts from the Ethereum provider.
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Setting the user's Ethereum address in the component's state.
        setAddress(accounts[0]);

        // Creating a new Web3 instance to interact with the Ethereum blockchain.
        const web3 = new Web3(window.ethereum);

        // Fetching the user's Ethereum balance in Wei (the smallest unit of Ether).
        const result = await web3.eth.getBalance(accounts[0]);

        // Converting the balance from Wei to Ether and setting it in the component's state.
        const balanceInEth = web3.utils.fromWei(result, "ether");
        setBalance(balanceInEth);
      } else {
        // Alerting the user if no Ethereum provider is detected.
        alert(
          "No Ethereum provider detected. Please install MetaMask or another wallet."
        );
      }

      // Setting the loading state back to 'false' once the operation is complete.
      setloading(false);
    } catch (error) {
      // Handling and logging any errors that occur during the connection process.
      setloading(false);
      console.error("Error connecting wallet:", error);
      alert("Error getting balance. Please try again.");
    }
  };

  return (
    <div className="center">
      <button onClick={connectWallet}>Connect Wallet</button>
      <div>{loading ? <span>Loading...</span> : null}</div>
      {address && <p>Address: {address}</p>}
      {balance && <p>Balance: {balance}</p>}
    </div>
  );
}
