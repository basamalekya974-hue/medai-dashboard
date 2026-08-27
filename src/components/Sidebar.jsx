const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', section: null },
  { id: 'appointments', label: 'Appointments', section: null },
  { id: 'labs', label: 'Lab Results', section: null },
  { id: 'vitals', label: 'Vitals & Trends', section: 'Health' },
  { id: 'medications', label: 'Medications', section: null },
  { id: 'reports', label: 'Reports & Files', section: 'AI Tools' },
]

function NavIcon({ id }) {
  switch (id) {
    case 'overview':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="2" fill="currentColor" opacity="0.9"></rect>
          <rect x="10" y="1" width="7" height="7" rx="2" fill="currentColor" opacity="0.5"></rect>
          <rect x="1" y="10" width="7" height="7" rx="2" fill="currentColor" opacity="0.5"></rect>
          <rect x="10" y="10" width="7" height="7" rx="2" fill="currentColor" opacity="0.7"></rect>
        </svg>
      )
    case 'appointments':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="14" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.4"></rect>
          <path d="M6 1v4M12 1v4M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path>
        </svg>
      )
    case 'labs':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <path d="M7 2v6L3 15a1 1 0 001 1h10a1 1 0 001-1L11 8V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path>
          <path d="M6.5 2h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"></path>
        </svg>
      )
    case 'vitals':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <path d="M1 9h3l2-5 3 10 2-8 2 3h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      )
    case 'medications':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <rect x="7" y="1" width="4" height="16" rx="2" stroke="currentColor" strokeWidth="1.3"></rect>
          <rect x="1" y="7" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="1.3"></rect>
        </svg>
      )
    case 'reports':
      return (
        <svg className="ico" viewBox="0 0 18 18" fill="none">
          <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"></rect>
          <path d="M6 7h6M6 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></path>
        </svg>
      )
    default:
      return null
  }
}

export default function Sidebar({ page, setPage }) {
  return (
    <nav className="sidebar">
      <div className="logo-wrap">
        <div className="logo">MedAI</div>
        <div className="logo-sub">Health Dashboard</div>
      </div>
      <div className="nav">
        {NAV_ITEMS.map((item) => (
          <div key={item.id}>
            {item.section && <div className="nav-section">{item.section}</div>}
            <button
              className={`nav-item${page === item.id ? ' active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              <NavIcon id={item.id} />
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className="sidebar-profile" onClick={() => setPage('overview')}>
        <div className="avatar">PM</div>
        <div>
          <div className="profile-name">Priya Mehta</div>
          <div className="profile-id">Patient #40291</div>
        </div>
      </div>
    </nav>
  )
}
