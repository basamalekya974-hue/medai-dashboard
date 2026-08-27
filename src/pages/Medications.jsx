import { useState } from 'react'
import { medSchedule } from '../data.js'

export default function Medications() {
  const [taken, setTaken] = useState({ 0: true, 1: true, 2: true, 3: false, 4: false })
  const takenCount = Object.values(taken).filter(Boolean).length

  const toggle = (i) => setTaken((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Medications</div>
          <div className="page-sub">Daily schedule and adherence</div>
        </div>
        <div className="top-btns">
          <button className="btn">+ Add Medication</button>
        </div>
      </div>

      <div className="content">
        <div className="med-grid">
          <div>
            <div className="alert info">
              <div className="alert-icon">💊</div>
              <div className="alert-text">
                {takenCount} of {medSchedule.length} medications taken today.{' '}
                <strong>Atorvastatin</strong> and <strong>Lisinopril</strong> are scheduled for this
                evening.
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div className="card-title">Today's Schedule</div>
                <div style={{ fontSize: 12, color: 'var(--text3)' }}>Fri, Apr 25</div>
              </div>
              {medSchedule.map((med, i) => (
                <div
                  className="med-sched-item"
                  key={med.name}
                  onClick={() => toggle(i)}
                  style={{ opacity: taken[i] ? 1 : 0.55 }}
                >
                  <div className="med-shed-icon" style={{ background: med.bg }}>{med.emoji}</div>
                  <div className="med-sched-info">
                    <div className="med-sched-name">{med.name}</div>
                    <div className="med-sched-dose">{med.dose}</div>
                    <div className="med-sched-time">{med.time}</div>
                  </div>
                  <div style={{ fontSize: 12, color: taken[i] ? 'var(--green)' : 'var(--text3)' }}>
                    {taken[i] ? '✓ Taken' : 'Mark taken'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-col">
            <div className="card">
              <div className="card-head">
                <div className="card-title">Adherence This Month</div>
              </div>
              <div className="progress-ring-wrap">
                <svg width="110" height="110">
                  <circle cx="55" cy="55" r="44" fill="none" stroke="var(--surface3)" strokeWidth="9"></circle>
                  <circle
                    cx="55" cy="55" r="44" fill="none" stroke="var(--green)" strokeWidth="9"
                    strokeDasharray="276" strokeDashoffset="25" strokeLinecap="round"
                    transform="rotate(-90 55 55)"
                  ></circle>
                </svg>
                <div className="progress-ring-value">91%</div>
                <div className="progress-ring-caption">Excellent adherence</div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div className="card-title" style={{ marginBottom: 12 }}>Refills Due Soon</div>
              <div className="r1-item red">
                <div className="refill-info">
                  <div className="refill-name">Metformin 500mg</div>
                  <div className="refill-days" style={{ color: 'var(--red)' }}>Runs out in 3 days</div>
                </div>
                <button className="btn sm primary">Refill</button>
              </div>
              <div className="r1-item amber">
                <div className="refill-info">
                  <div className="refill-name">Vitamin D3</div>
                  <div className="refill-days" style={{ color: 'var(--amber)' }}>Runs out in 12 days</div>
                </div>
                <button className="btn sm primary">Refill</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
