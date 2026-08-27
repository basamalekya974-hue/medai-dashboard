import { labResults } from '../data.js'

export default function Overview({ setPage, appointments }) {
  const upcoming = appointments.filter((a) => a.status !== 'completed').slice(0, 3)

  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Good Morning, Priya</div>
          <div className="page-sub">Friday, April 25, 2026 · Here's your daily health summary</div>
        </div>
        <div className="top-btns">
          <button className="btn">
            Check symptoms
            <img src="https://img.icons8.com/?size=96&id=12773&format=png" alt="" width="18" height="18" />
          </button>
          <button className="btn primary" onClick={() => setPage('book')}>
            Book Appointment
          </button>
        </div>
      </div>

      <div className="content">
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Health Score</div>
            <div className="stat-val">78<span className="stat-unit"> / 100</span></div>
            <div className="stat-badge badge-good">↑ +4 this month</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Next Appointment</div>
            <div className="stat-val" style={{ fontSize: 22 }}>April 28</div>
            <div className="stat-badge badge-neutral">Dr. Sharma · 10:30 AM</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Medications Today</div>
            <div className="stat-val">3<span className="stat-unit"> / 4</span></div>
            <div className="stat-badge badge-good">on track</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Steps Today</div>
            <div className="stat-val">6,240</div>
            <div className="stat-badge badge-warn">↓ below goal</div>
          </div>
        </div>

        <div className="grid-2">
          <div className="flex-col">
            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">Upcoming Appointments</div>
                  <div className="card-sub">Next 30 Days</div>
                </div>
                <button className="btn sm" onClick={() => setPage('appointments')}>view all</button>
              </div>
              {upcoming.map((a) => (
                <div className="appt-item" key={a.id}>
                  <div className="appt-striple"></div>
                  <div>
                    <div className="appt-doc">{a.name}</div>
                    <div className="appt-spec">{a.spec} · {a.hospital}</div>
                  </div>
                  <div>
                    <div className="appt-time">{a.time}</div>
                    <div className="appt-date">{a.date}</div>
                    <div className={`chip ${a.status}`}>{a.statusLabel}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">Recent Lab Results</div>
                  <div className="card-sub">Last updated Apr 18, 2026</div>
                </div>
                <button className="btn sm" onClick={() => setPage('labs')}>Full reports</button>
              </div>
              <div className="card-body" style={{ paddingTop: 12 }}>
                <table className="lab-table">
                  <thead>
                    <tr><th>Test</th><th>Result</th><th>Reference Range</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {labResults.map((row) => (
                      <tr key={row.test}>
                        <td>{row.test}</td>
                        <td>{row.result}</td>
                        <td>{row.range}</td>
                        <td>
                          <span
                            className="range-pill"
                            style={{ background: `var(--${row.color}bg)`, color: `var(--${row.color})` }}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">Today's Vitals</div>
                  <div className="card-sub">Last synced 8:42 AM</div>
                </div>
              </div>
              <div className="card-body">
                <div className="vitals-grid">
                  <div className="vital-box">
                    <div className="vital-label">Blood pressure</div>
                    <div className="vital-val">124<span className="vital-unit">/82 mmHg</span></div>
                    <svg className="sparkline" viewBox="0 0 90 30">
                      <polyline className="line line-green" points="0,22 20,18 40,20 60,14 80,17 100,12" />
                    </svg>
                  </div>
                  <div className="vital-box">
                    <div className="vital-label">Heart Rate</div>
                    <div className="vital-val">72<span className="vital-unit"> bpm</span></div>
                    <svg className="sparkline" viewBox="0 0 90 30">
                      <polyline className="line line-red" points="0,20 15,15 30,5 40,25 55,12 70,18 85,10 100,15" />
                    </svg>
                  </div>
                  <div className="vital-box">
                    <div className="vital-label">Blood Glucose</div>
                    <div className="vital-val">108<span className="vital-unit"> mg/dL</span></div>
                    <svg className="sparkline" viewBox="0 0 90 30">
                      <polyline className="line line-amber" points="0,20 20,16 40,22 60,14 80,18 100,15" />
                    </svg>
                  </div>
                  <div className="vital-box">
                    <div className="vital-label">SPO2</div>
                    <div className="vital-val">98<span className="vital-unit"> %</span></div>
                    <svg className="sparkline" viewBox="0 0 90 30">
                      <polyline className="line line-blue" points="0,12 20,10 40,13 60,9 80,11 100,10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
