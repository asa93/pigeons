import Head from 'next/head'

import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useWallet } from "@solana/wallet-adapter-react";

import {
  shortenAddress,
} from "../utils/candy-machine";
import useCandyMachine from '../hooks/use-candy-machine';
import useWalletBalance from '../hooks/use-wallet-balance';
import Countdown from 'react-countdown';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const style={
    marginTop:"2em"
}

const WalletNav = (props) => {
  const [balance] = useWalletBalance()
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const wallet = useWallet();

  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()

  let {showAddress} = props;
  return (
    <main className="p-5" style={style}>
      <Toaster />
      <Head>
        <title>PudgyPigeons NFT</title>
        <meta name="description" content="PudgyPigeons NFT is the hottest NFT collection on Solana." />
        <link rel="icon" href={require("../staticv2/images/favicon/favicon-16x16.png").default.src} />
      </Head>  

      <div className="flex float-right space-x-5">
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>

      { 
        showAddress
        && wallet.connected &&
        <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
      }

      {wallet.connected &&
        <>
          <p>Balance: {(balance || 0).toLocaleString()} SOL  <br/>
           Available: {nftsData.itemsRemaining}  <br/>
           Minted: {nftsData.itemsRedeemed}   <br/>
           Total: {nftsData.itemsAvailable}</p>
        </>
      }

      <div className="flex flex-col justify-start items-start">
        {wallet.connected &&
          <button type="button"
          class="btn btn-primary"
          style={{"justifyContent": "space-between", "pointerEvents": "auto"}}

            disabled={isSoldOut || isMinting || !isActive}
            onClick={onMint}
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ?
              <span>MINT {isMinting && 'LOADING...'}</span> :
              <Countdown
                date={mintStartDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            }
          </button>
        }

 
        {wallet.connected &&
          <button type="button"
          class="btn btn-primary"
          style={{"justifyContent": "space-between", "pointerEvents": "auto"}}
          
            disabled={isSoldOut || isMinting || !isActive}
            onClick={() => onMintMultiple(5)}
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ?
              <span>MINT 5 {isMinting && 'LOADING...'}</span> :
              <Countdown
                date={mintStartDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            }
          </button>
        }
      </div>

  

      
    </main>
     
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <span>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default WalletNav;



