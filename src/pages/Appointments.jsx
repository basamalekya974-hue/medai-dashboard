export default function Appointments({ setPage, appointments, onCancel }) {
  const upcoming = appointments.filter((a) => a.kind === 'upcoming')
  const past = appointments.filter((a) => a.kind === 'past')

  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div className="page-heading">Appointments</div>
          <div className="page-sub">Manage all your upcoming and past visits</div>
        </div>
        <div className="top-btns">
          <button className="btn primary" onClick={() => setPage('book')}>+ Book Appointment</button>
        </div>
      </div>

      <div className="content">
        <div className="appt-page-grid">
          <div>
            <div className="separator">Upcoming</div>
            {upcoming.map((a) => (
              <div className="big-appt-item" key={a.id}>
                <div className={`appt-doc-avatar ${a.avatarColor}`}>{a.initials}</div>
                <div className="appt-details">
                  <div className="appt-doc-name">{a.name}</div>
                  <div className="appt-doc-spec">{a.spec}</div>
                  <div className="appt-doc-hosp">{a.hospital}</div>
                  <div className="appt-actions">
                    <button className="btn sm reschedule-btn" onClick={() => setPage('book')}>Reschedule</button>
                    <button className="btn sm cancel-btn" onClick={() => onCancel(a.id)}>Cancel</button>
                  </div>
                </div>
                <div className="appt-dt">
                  <div className="appt-dt-date">{a.date}</div>
                  <div className="appt-dt-time">{a.time}</div>
                  <div className={`chip ${a.status}`}>{a.statusLabel}</div>
                </div>
              </div>
            ))}

            <div className="separator" style={{ marginTop: 8 }}>Past Visits</div>
            {past.map((a) => (
              <div className="big-appt-item" key={a.id}>
                <div className={`appt-doc-avatar ${a.avatarColor}`}>{a.initials}</div>
                <div className="appt-details">
                  <div className="appt-doc-name">{a.name}</div>
                  <div className="appt-doc-spec">{a.spec}</div>
                  <div className="appt-doc-hosp">{a.hospital}</div>
                  <div className="appt-actions">
                    <button className="btn sm view">View Summary</button>
                    <button className="btn sm download">Download Notes</button>
                  </div>
                </div>
                <div className="appt-dt">
                  <div className="appt-dt-date">{a.date}</div>
                  <div className={`chip ${a.status}`}>{a.statusLabel}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="card" style={{ padding: 20, marginBottom: 14 }}>
              <div className="card-title" style={{ marginBottom: 13 }}>Quick Book</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button className="btn" style={{ justifyContent: 'flex-start', gap: 10 }} onClick={() => setPage('book')}>
                  <div className="avatar" style={{ color: 'var(--green)', background: 'var(--green3)' }}>AS</div>
                  <div className="avatar-name">Dr. Ananya Sharma</div>
                </button>
                <button className="btn" style={{ justifyContent: 'flex-start', gap: 10 }} onClick={() => setPage('book')}>
                  <div className="avatar" style={{ color: 'var(--amber)', background: 'var(--ambbg)' }}>RK</div>
                  <div className="avatar-name">Dr. Rajan Kapoor</div>
                </button>
                <button className="btn primary" style={{ padding: 8 }} onClick={() => setPage('book')}>+ New Doctor</button>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <div className="card-title" style={{ marginBottom: 12 }}>Reminders</div>
              <div className="rem-body">
                <div className="rem-item" style={{ background: 'var(--redbg)', border: '1px solid #f0c4b8' }}>
                  <strong style={{ color: 'var(--red)' }}>HbA1c follow-up</strong>
                  <br />
                  Book within 14 days per Dr. Sharma's recommendation
                </div>
                <div className="rem-item" style={{ background: 'var(--ambbg)', border: '1px solid #e8d0a0' }}>
                  <strong style={{ color: 'var(--amber)' }}>Annual cardiology review</strong>
                  <br />
                  Due in 6 weeks — schedule with Dr. Kapoor
                </div>
                <div className="rem-item" style={{ background: 'var(--green4)', border: '1px solid #b0fdb0' }}>
                  <strong style={{ color: 'var(--green)' }}>Lab prep reminder</strong>
                  <br />
                  Fast 10 hours before May 9 lab test
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
