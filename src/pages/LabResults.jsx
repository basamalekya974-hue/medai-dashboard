import { fullLabPanel, labTimeline } from '../data.js'

export default function LabResults({ setPage }) {
  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Lab Results</div>
          <div className="page-sub">Full diagnostic history</div>
        </div>
        <div className="top-btns">
          <button className="btn">↑ Upload Result</button>
          <button className="btn primary" onClick={() => setPage('book')}>Book Lab Test</button>
        </div>
      </div>

      <div className="content">
        <div className="grid-2">
          <div>
            <div className="alert warn">
              <div className="alert-icon">⚠️</div>
              <div className="alert-text">
                <strong>2 values require attention</strong> in your April 18 panel. Review with your
                doctor at the upcoming appointment.
              </div>
            </div>

            <div className="card">
              <div className="card-head">
                <div>
                  <div className="card-title">April 18, 2026 — Full Panel</div>
                  <div className="card-sub">Metropolis Labs · Ordered by Dr. Sharma</div>
                </div>
                <button className="btn sm">Download PDF</button>
              </div>
              <div className="card-body" style={{ paddingTop: 12 }}>
                <table className="lab-table">
                  <thead>
                    <tr><th>Test</th><th>Result</th><th>Reference Range</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {fullLabPanel.map((row) => (
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
                  <div className="card-title">Test History Timeline</div>
                  <div className="card-sub">All past lab visits</div>
                </div>
              </div>
              <div className="card-body">
                <div className="timeline">
                  {labTimeline.map((item, i) => (
                    <div className="t1-item" key={i}>
                      <div className="t1-dot" style={{ background: `var(--${item.dot})`, borderColor: `var(--${item.dot})` }}></div>
                      <div className="t1-content">
                        <div className="t1-date">{item.date}</div>
                        <div className="t1-title">{item.title}</div>
                        <div className="t1-lab">{item.lab}</div>
                        <div className="t1-status">
                          {item.tags.map((tag) => (
                            <span className={`chip ${tag.color}`} key={tag.label}>{tag.label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
