import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useTranslation } from './hooks/useTranslation';
import TribeRegistryABI from './abis/TribeRegistry.json';

const TRIBE_REGISTRY_ADDRESS = 'PLACEHOLDER_TR';

function App() {
  const { t, lang, toggleLang, direction } = useTranslation();
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [tribeSymbol, setTribeSymbol] = useState('');
  const [tribeSeal, setTribeSeal] = useState('');
  const [status, setStatus] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) {
      setStatus(t('no_metamask'));
      return;
    }
    try {
      const prov = new ethers.BrowserProvider(window.ethereum);
      const accounts = await prov.send("eth_requestAccounts", []);
      setProvider(prov);
      setAccount(accounts[0]);
      setStatus('');
    } catch (err) {
      setStatus(t('connection_rejected'));
    }
  };

  const createTribe = async () => {
    if (!provider || !tribeSymbol || !tribeSeal) return;
    try {
      setStatus(t('registering'));
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(TRIBE_REGISTRY_ADDRESS, TribeRegistryABI.abi, signer);
      const tx = await contract.createTribe(tribeSymbol, tribeSeal);
      await tx.wait();
      setStatus(t('success', { symbol: tribeSymbol }));
      setTribeSymbol('');
      setTribeSeal('');
    } catch (err) {
      setStatus(`${t('error')}: ${err.reason || err.message}`);
    }
  };

  return (
    <div dir={direction} style={{
      fontFamily: "'Vazirmatn', sans-serif",
      background: '#f5f0e8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      direction: direction
    }}>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        <button onClick={toggleLang} style={{
          padding: '0.5rem 1rem',
          background: '#0a0a0a',
          color: '#f5f0e8',
          border: '1px solid #8a8070',
          borderRadius: '4px',
          cursor: 'pointer',
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.8rem'
        }}>
          {lang === 'en' ? 'FA' : 'EN'}
        </button>
      </div>

      <h1 style={{ color: '#c8392b', fontSize: '3rem' }}>{t('title')}</h1>
      <p style={{ color: '#8a8070' }}>{t('subtitle')}</p>

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
          {t('connect_wallet')}
        </button>
      ) : (
        <div style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
          <p style={{ color: '#0a0a0a' }}>{t('address_label')}: {account.slice(0,6)}...{account.slice(-4)}</p>

          <div style={{ marginTop: '2rem' }}>
            <input
              placeholder={t('symbol_placeholder')}
              value={tribeSymbol}
              onChange={e => setTribeSymbol(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', fontFamily: 'Vazirmatn' }}
            />
            <input
              placeholder={t('seal_placeholder')}
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
              {t('register_button')}
            </button>
          </div>

          {status && <p style={{ marginTop: '1rem', color: '#c8392b' }}>{status}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
