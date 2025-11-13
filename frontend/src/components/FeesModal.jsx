import React, { useState, useEffect } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE;

export default function FeesModal({universityId, open, onClose}){
  const [fees,setFees] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
    if(!open) return;
    setLoading(true); setError(null);
    fetch(`${API_BASE}/universities/fees/${universityId}`)
      .then(r=>r.json())
      .then(d=>setFees(d.fees))
      .catch(()=>setError('Failed to load fees'))
      .finally(()=>setLoading(false));
  },[open, universityId]);

  if(!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <h3>Course-wise Fees</h3>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <ul>
          {fees.map(f=><li key={f.code}><strong>{f.name}</strong> — {f.feeRange}</li>)}
        </ul>
      </div>
    </div>
  );
}
