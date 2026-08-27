import { reports } from '../data.js'

export default function Reports() {
  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Reports & Files</div>
          <div className="page-sub">Your medical documents and records</div>
        </div>
        <div className="top-btns">
          <button className="btn">↑ Upload File</button>
          <button className="btn primary">Generate AI Summary</button>
        </div>
      </div>

      <div className="content">
        <div className="report-grid">
          {reports.map((r) => (
            <div className="report-card" key={r.name}>
              <div className="report-icon" style={{ background: r.bg }}>{r.emoji}</div>
              <div className="report-name">{r.name}</div>
              <div className="report-date">{r.date}</div>
              <div className="report-size">{r.size}</div>
              <div className="report-actions">
                <button className="btn sm primary">View</button>
                <button className="btn sm">Download</button>
              </div>
            </div>
          ))}
          <div className="report-card upload">
            <div style={{ fontSize: 28, marginBottom: 8 }}>+</div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Upload New Document</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>PDF, JPG, DICOM</div>
          </div>
        </div>
      </div>
    </div>
  )
}
