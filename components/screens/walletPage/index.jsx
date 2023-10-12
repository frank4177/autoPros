"use client";

import WalletConnectButton from "@/components/buttons/WalletButton";
import React, { useState } from "react";

const WalletPageScreen = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const props = {
    address: address,
    setAddress: setAddress,
    balance: balance,
    setBalance: setAddress,
  };
  return (
    <>
      <div className="center">
        <h1>Wallet Connect</h1>
        <WalletConnectButton
          setAddress={setAddress}
          setBalance={setBalance}
        />
        {address && <p>Address: {address}</p>}
        {balance && <p>Balance: {balance} </p>}
      </div>
    </>
  );
};

export default WalletPageScreen;
