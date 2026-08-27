import { useState } from 'react'

export default function Vitals() {
  const [range, setRange] = useState('30D')

  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Vitals & Trends</div>
          <div className="page-sub">Health metrics over time</div>
        </div>
        <div className="top-btns">
          <button className="btn">+ Log Reading</button>
        </div>
      </div>

      <div className="content">
        <div className="vitals-big-grid">
          <div className="vitals-big-card">
            <div className="vbc-label">Blood pressure</div>
            <div className="vbc-val">124<span className="vbc-unit">/ 82 mmHg</span></div>
            <div className="vbc-trend trend-ok">→ Stable</div>
          </div>
          <div className="vitals-big-card">
            <div className="vbc-label">Heart rate</div>
            <div className="vbc-val">72<span className="vbc-unit">bpm</span></div>
            <div className="vbc-trend trend-down">↓ Down 3 bpm</div>
          </div>
          <div className="vitals-big-card">
            <div className="vbc-label">Blood glucose</div>
            <div className="vbc-val">108<span className="vbc-unit"> mg/dL</span></div>
            <div className="vbc-trend trend-up">↑ Slightly high</div>
          </div>
          <div className="vitals-big-card">
            <div className="vbc-label">SpO2</div>
            <div className="vbc-val">98<span className="vbc-unit">%</span></div>
            <div className="vbc-trend trend-ok">→ Normal</div>
          </div>
        </div>

        <div className="grid-3">
          <div className="card" style={{ gridColumn: '1 / 3' }}>
            <div className="card-head">
              <div className="card-title">Blood pressure - {range}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['7D', '30D', '90D'].map((r) => (
                  <button
                    key={r}
                    className={`btn sm${range === r ? ' primary' : ''}`}
                    onClick={() => setRange(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="card-body">
              <svg viewBox="0 0 560 160" width="100%" fill="none" style={{ display: 'block' }}>
                <defs>
                  <linearGradient id="bpgrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d6f0e2" stopOpacity=".6"></stop>
                    <stop offset="100%" stopColor="#d6f0e2" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0,90 C40,80 80,70 120,75 C160,80 200,65 240,60 C280,55 320,70 360,65 C400,60 440,50 480,55 C510,58 540,50 560,48"
                  stroke="var(--green)" strokeWidth="2" fill="url(#bpgrad)"
                ></path>
                <path
                  d="M0,90 C40,80 80,70 120,75 C160,80 200,65 240,60 C280,55 320,70 360,65 C400,60 440,50 480,55 C510,58 540,50 560,48"
                  stroke="var(--green)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                ></path>
                <path
                  d="M10,110 C40,105 80,100 120,102 C160,104 200,95 240,92 C280,89 320,100 360,96 C400,92 440,85 480,88 C510,90 540,84 560,82"
                  stroke="var(--blue)" strokeWidth="1.5" fill="none"
                  strokeDasharray="4,3" strokeLinecap="round" opacity=".6"
                ></path>
                <text x="4" y="155" fontSize="10" fill="var(--border2)">Apr 1</text>
                <text x="250" y="155" fontSize="10" fill="var(--border2)">Apr 15</text>
                <text x="520" y="155" fontSize="10" fill="var(--border2)" textAnchor="end">Apr 25</text>
                <text x="565" y="52" fontSize="10" fill="var(--green)" textAnchor="end">Systolic</text>
                <text x="565" y="86" fontSize="10" fill="var(--blue)" textAnchor="end" opacity=".7">Diastolic</text>
              </svg>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <div className="card-title">Body Weight</div>
            </div>
            <div className="card-body">
              <div style={{ fontSize: 32, fontWeight: 300, marginBottom: 4, letterSpacing: '-1px' }}>
                63.2 <span style={{ fontSize: 14, color: 'var(--text3)' }}>Kg</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--green)' }}>↓ 0.8 kg this month</div>
              <svg viewBox="0 0 220 60" width="100%" fill="none" style={{ marginTop: 12, display: 'block' }}>
                <polyline
                  points="0,52 36,48 72,44 108,40 144,38 180,35 220,32"
                  stroke="var(--green)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                ></polyline>
                <polyline
                  points="0,52 36,48 72,44 108,40 144,38 180,35 220,32"
                  stroke="var(--green3)" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".4"
                ></polyline>
              </svg>
              <div style={{ fontSize: 11, display: 'flex', justifyContent: 'space-between', marginTop: 8, color: 'var(--text3)' }}>
                <span>Target: 60 kg</span>
                <span>BMI: 24.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
