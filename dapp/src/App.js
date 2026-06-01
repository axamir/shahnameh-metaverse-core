import React, { useState } from 'react';
import { ethers } from 'ethers';
import TribeRegistryABI from './abis/TribeRegistry.json';

const TRIBE_REGISTRY_ADDRESS = '0x2153aF28d9bC7e2E914F41D4b1a0FC3d98d750BC';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [tribeSymbol, setTribeSymbol] = useState('');
  const [tribeSeal, setTribeSeal] = useState('');
  const [status, setStatus] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      setStatus('MetaMask پیدا نشد. لطفاً افزونه را نصب کنید.');
      return;
    }
    try {
      // ابتدا سعی کن به Ganache سویچ کنی
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x539' }]
      });
    } catch (switchError) {
      // اگر شبکه وجود ندارد، آن را بساز
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x539',
              chainName: 'Ganache Local',
              nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
              rpcUrls: ['http://127.0.0.1:8545'],
            }]
          });
        } catch (addError) {
          setStatus('نتوانستیم شبکه Ganache را اضافه کنیم. آیا Ganache اجراست؟');
          return;
        }
      }
    }

    try {
      const prov = new ethers.BrowserProvider(window.ethereum);
      const accounts = await prov.send("eth_requestAccounts", []);
      const signer = await prov.getSigner();
      setProvider(prov);
      setAccount(accounts[0]);
      setStatus('');
    } catch (err) {
      setStatus('اتصال رد شد یا MetaMask قفل است.');
    }
  };

  const createTribe = async () => {
    if (!provider || !tribeSymbol || !tribeSeal) return;
    try {
      setStatus('در حال ثبت تبار...');
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(TRIBE_REGISTRY_ADDRESS, TribeRegistryABI.abi, signer);
      const tx = await contract.createTribe(tribeSymbol, tribeSeal);
      await tx.wait();
      setStatus(`تبار ${tribeSymbol} با موفقیت ثبت شد!`);
      setTribeSymbol('');
      setTribeSeal('');
    } catch (err) {
      setStatus(`خطا: ${err.reason || err.message}`);
    }
  };

  return (
    <div style={{
      fontFamily: "'Vazirmatn', sans-serif",
      background: '#f5f0e8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#c8392b', fontSize: '3rem' }}>دروازهٔ شاهنامه</h1>
      <p style={{ color: '#8a8070' }}>تبار خود را ثبت کن و وفاداری را بسنج</p>

      {!account ? (
        <button onClick={connectWallet} style={{
          padding: '1rem 2rem',
          background: '#c8392b',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.2rem'
        }}>
          اتصال کیف پول
        </button>
      ) : (
        <div style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
          <p style={{ color: '#0a0a0a' }}>آدرس: {account.slice(0,6)}...{account.slice(-4)}</p>

          <div style={{ marginTop: '2rem' }}>
            <input
              placeholder="نماد تبار (مثلاً @x@)"
              value={tribeSymbol}
              onChange={e => setTribeSymbol(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontFamily: 'Vazirmatn' }}
            />
            <input
              placeholder="مُهر تبار (مثلاً: من ثبت کردم)"
              value={tribeSeal}
              onChange={e => setTribeSeal(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontFamily: 'Vazirmatn' }}
            />
            <button onClick={createTribe} style={{
              padding: '0.75rem 2rem',
              background: '#b8960c',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}>
              ثبت تبار
            </button>
          </div>

          {status && <p style={{ marginTop: '1rem', color: '#c8392b' }}>{status}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
