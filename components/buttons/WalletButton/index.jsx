"use client";

import { useState } from "react";
import Web3 from "web3";

export default function WalletConnectButton({ setAddress, setBalance }) {
  const [loading, setloading] = useState(false);
  const connectWallet = async () => {
    setloading(true);
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);

        const web3 = new Web3(window.ethereum);
        const result = await web3.eth.getBalance(accounts[0]);
        const balanceInEth = web3.utils.fromWei(result, "ether");
        setBalance(balanceInEth);
      } else {
        alert(
          "No Ethereum provider detected. Please install MetaMask or another wallet."
        );
      }
      setloading(false);
    } catch (error) {
      setloading(false);
      console.error("Error connecting wallet:", error);
      alert("Error getting balance. Please try again.");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <div>{loading ? <span>Loading...</span> : null}</div>
      
    </div>
  );
}
