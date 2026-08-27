export default function ConfirmationModal({ open, booking, onClose, onViewAppointments }) {
  return (
    <div className={`modal-overlay${open ? ' open' : ''}`}>
      {open && (
        <div className="modal">
          <div className="modal-icon">✅</div>
          <div className="modal-title">Appointment Confirmed!</div>
          <div className="modal-sub">
            Your appointment has been successfully booked. You'll receive a confirmation via
            SMS and email shortly.
          </div>
          <div className="modal-details">
            <div className="modal-det-row">
              <span>{booking?.doctor?.name}</span>
            </div>
            <div className="modal-det-row">
              <span style={{ color: 'var(--text3)' }}>Date</span>
              {/*
                script.js's confirmBooking() only ever sets #m-doc and #m-date.
                Hospital and Reference are static text in the HTML — they
                never actually update to match the real booking. Preserved
                here exactly as in the original.
              */}
              <span>{(booking?.date || 'Monday, Apr 28')} · {(booking?.time || '10:30 AM')}</span>
            </div>
            <div className="modal-det-row">
              <span style={{ color: 'var(--text3)' }}>Hospital</span>
              <span>Apollo Hospitals, Jubilee Hills</span>
            </div>
            <div className="modal-det-row">
              <span style={{ color: 'var(--text3)' }}>Reference</span>
              <span style={{ color: 'var(--green)', fontWeight: 600 }}>#APPT-20260428-7291</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <button className="btn" onClick={onClose}>Close</button>
            <button className="btn primary" onClick={onViewAppointments}>
              View Appointments →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}