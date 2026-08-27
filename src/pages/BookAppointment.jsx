import { useEffect, useMemo, useState } from 'react'
import { doctors, specialties, timeSlots, unavailableSlots, aprilAvailableDays } from '../data.js'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const WEEKDAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// initCalendar() in script.js always resets to April 2026 whenever the
// booking page is opened.
const INIT_YEAR = 2026
const INIT_MONTH = 3 // April (0-indexed)

export default function BookAppointment({ setPage, onConfirmBooking }) {
  const [step, setStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0])
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])

  const [calYear, setCalYear] = useState(INIT_YEAR)
  const [calMonth, setCalMonth] = useState(INIT_MONTH)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedDateLabel, setSelectedDateLabel] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [visitType, setVisitType] = useState('In-Person Consultation')
  const [reason, setReason] = useState('Select primary reason')
  const [symptoms, setSymptoms] = useState(
    'Feeling fatigued in the afternoons. Occasional mild headaches. Want to discuss elevated HbA1c.'
  )
  const [insurance, setInsurance] = useState('Star Health Insurance - Active')

  // Mirrors initCalendar() being called every time showPage('book') runs.
  useEffect(() => {
    setCalYear(INIT_YEAR)
    setCalMonth(INIT_MONTH)
    setSelectedDay(null)
    setSelectedDateLabel('')
    setSelectedTime('')
  }, [])

  const changeMonth = (dir) => {
    let m = calMonth + dir
    let y = calYear
    if (m > 11) { m = 0; y++ }
    if (m < 0) { m = 11; y-- }
    setCalMonth(m)
    setCalYear(y)
    setSelectedDay(null)
    setSelectedDateLabel('')
    setSelectedTime('')
  }

  // Reproduces renderCal(): first-weekday offset, days in month, today/past
  // checks, and the has-slot list (April only). Note the original loop is
  // `for (let d = 1; d < days; d++)`, an off-by-one that never renders the
  // month's last day — kept here for fidelity with script.js.
  const calendarDays = useMemo(() => {
    const firstWeekday = new Date(calYear, calMonth, 1).getDay()
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
    const today = new Date()
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    const cells = Array.from({ length: firstWeekday }, () => ({ empty: true }))
    for (let d = 1; d < daysInMonth; d++) {
      const dt = new Date(calYear, calMonth, d)
      const isToday = dt.toDateString() === today.toDateString()
      const isPast = dt < todayMidnight
      const isAvail = calMonth === 3 && aprilAvailableDays.includes(d)
      cells.push({ day: d, isToday, isPast, isAvail })
    }
    return cells
  }, [calYear, calMonth])

  const selectDate = (day) => {
    const dt = new Date(calYear, calMonth, day)
    const label = `${WEEKDAY_ABBR[dt.getDay()]}, ${MONTH_ABBR[calMonth]} ${day}`
    setSelectedDay(day)
    setSelectedDateLabel(label)
    setSelectedTime('')
  }

  const goStep = (n) => {
    if (n === 3 && (!selectedDateLabel || !selectedTime)) {
      alert('Please select a date and time slot.')
      return
    }
    setStep(n)
  }

  const handleConfirm = () => {
    onConfirmBooking({
      doctor: selectedDoctor,
      date: selectedDateLabel,
      time: selectedTime,
      visitType,
      reason,
      insurance,
    })
  }

  return (
    <div className="page active">
      <div className="topbar">
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
            <button className="btn sm" onClick={() => setPage('appointments')} style={{ padding: '6px 10px' }}>
              ← Back
            </button>
            <div className="title">Book Appointment</div>
          </div>
          <div className="sub-title">Find a doctor and schedule your visit</div>
        </div>
      </div>

      <div className="content">
        <div className="step-bar">
          {[1, 2, 3, 4].map((n, i) => (
            <div key={n} style={{ display: 'contents' }}>
              <div className={`step${step === n ? ' active' : ''}${step > n ? ' done' : ''}`}>
                <div className="step-num">{n}</div>
                <span className="step-text">
                  {['choose doctor', 'Pick Date & Time', 'Details', 'Confirm'][i]}
                </span>
              </div>
              {n < 4 && <div className={`step-line${step > n ? ' done' : ''}`}></div>}
            </div>
          ))}
        </div>

        <div className="book-layout">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <div className="section-heading">
                <div className="section-title">Select Specialist</div>
              </div>
              <div className="section-spec">
                {specialties.map((s) => (
                  <button
                    key={s}
                    className={`chip spec-btn${selectedSpecialty === s ? ' selected-spec' : ''}`}
                    onClick={() => setSelectedSpecialty(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="doc-grid">
                {doctors.map((d) => (
                  <div
                    key={d.id}
                    className={`doc-card${selectedDoctor.id === d.id ? ' selected' : ''}`}
                    onClick={() => setSelectedDoctor(d)}
                  >
                    <div className="doc-top">
                      <div className="doc-avatar" style={{ background: d.cardAvatarBg, color: d.cardAvatarColor }}>
                        {d.initials}
                      </div>
                      <div>
                        <div className="doc-name">{d.name}</div>
                        <div className="doc-spec">{d.spec}</div>
                      </div>
                    </div>
                    <div className="doc-info">
                      <div className="doc-stat">⭐ <span>{d.rating}</span> ({d.reviews} reviews)</div>
                      <div className="doc-hops">{d.hospital}</div>
                    </div>
                    <div className="doc-avail">
                      <div className={`chip ${d.availChip}`}>{d.availability}</div>
                    </div>
                    <div className="doc-fee">Consult fee: ₹{d.fee}</div>
                  </div>
                ))}
                <div className="doc-continue">
                  <button className="btn primary" onClick={() => goStep(2)}>Continue →</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <div className="card" style={{ padding: 16, marginBottom: 20 }}>
                <div className="cal-header">
                  <button className="btn sm" onClick={() => changeMonth(-1)}>‹</button>
                  <div className="cal-month">{MONTH_NAMES[calMonth]} {calYear}</div>
                  <button className="btn sm" onClick={() => changeMonth(1)}>›</button>
                </div>
                <div className="cal-grid">
                  {['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'].map((d) => (
                    <div className="cal-day-name" key={d}>{d}</div>
                  ))}
                </div>
                <div className="cal-grid" style={{ marginTop: 4 }}>
                  {calendarDays.map((cell, idx) => {
                    if (cell.empty) return <div className="cal-day empty" key={`e${idx}`}></div>
                    const classes = [
                      'cal-day',
                      cell.isToday ? 'today' : '',
                      cell.isPast ? 'disabled' : '',
                      cell.isAvail ? 'has-slot' : '',
                      selectedDay === cell.day ? 'selected' : '',
                    ].filter(Boolean).join(' ')
                    return (
                      <div
                        key={cell.day}
                        className={classes}
                        onClick={() => !cell.isPast && selectDate(cell.day)}
                      >
                        {cell.day}
                      </div>
                    )
                  })}
                </div>
                <div className="slot-avail">
                  <div className="section-title" style={{ marginBottom: 12 }}>
                    Available Slots for <span>{selectedDateLabel || '—'}</span>
                  </div>
                  <div className="time-grid">
                    {!selectedDay && (
                      <div style={{ fontSize: 12, color: 'var(--text3)', gridColumn: '1 / -1', textAlign: 'center', padding: 16 }}>
                        Select a date to see slots
                      </div>
                    )}
                    {selectedDay && timeSlots.map((slot) => {
                      const isUnavail = unavailableSlots.includes(slot)
                      return (
                        <div
                          key={slot}
                          className={`time-slot${isUnavail ? ' unavail' : ''}${selectedTime === slot ? ' selected' : ''}`}
                          onClick={() => !isUnavail && setSelectedTime(slot)}
                        >
                          {slot}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="doc-next">
                <button className="btn" onClick={() => setStep(1)}>← Back</button>
                <button className="btn primary" onClick={() => goStep(3)}>Continue →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <div className="card" style={{ padding: 22, marginBottom: 20 }}>
                <div className="form-group">
                  <label className="form-label">Visit Type</label>
                  <div className="form-radio-group">
                    {['In-Person Consultation', 'Video Consultation'].map((opt) => (
                      <div
                        key={opt}
                        className={`radio-opt${visitType === opt ? ' selected' : ''}`}
                        onClick={() => setVisitType(opt)}
                      >
                        <div className="radio-dot"></div>
                        <div>
                          <div className="radio-text">{opt}</div>
                          <div className="radio-text-sub">
                            {opt === 'In-Person Consultation' ? 'Visit the clinic in person' : 'Online via MedAI platform'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Reason for Visit</label>
                  <select className="form-input" value={reason} onChange={(e) => setReason(e.target.value)}>
                    {['Select primary reason', 'Diabetes Management / HbA1c Follow-up', 'General Health Check', 'Lab Results Review', 'New Symptoms', 'Prescription Renewal', 'Other'].map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Current Symptoms (optional)</label>
                  <textarea
                    className="form-input"
                    rows={3}
                    placeholder="Briefly describe any symptoms you're experiencing"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Insurance / Payment</label>
                  <select className="form-input" value={insurance} onChange={(e) => setInsurance(e.target.value)}>
                    {['Star Health Insurance - Active', 'HDFC Ergo Health', 'Pay out-of-pocket'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="doc-next">
                <button className="btn" onClick={() => setStep(2)}>← Back</button>
                <button className="btn primary" onClick={() => setStep(4)}>Review Booking →</button>
              </div>
            </div>
          )}

          {/* Step 4 — mirrors populateConfirm() */}
          {step === 4 && (
            <div>
              <div className="card" style={{ padding: 22, marginBottom: 20 }}>
                <div className="appl-review">Please review your booking details</div>
                <div className="selected-doctor">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      className="avatar lg"
                      style={{ background: selectedDoctor.confirmAvatarBg, color: selectedDoctor.confirmAvatarColor }}
                    >
                      {selectedDoctor.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 500 }}>{selectedDoctor.name}</div>
                      <div style={{ fontSize: 13, color: 'var(--text3)' }}>{selectedDoctor.spec}</div>
                    </div>
                  </div>
                </div>
                <table style={{ fontSize: 13, width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="review-left-side">Date & Time</td>
                      <td className="review-right-side">
                        {(selectedDateLabel || 'Apr 28')} · {(selectedTime || '10:30 AM')}
                      </td>
                    </tr>
                    <tr>
                      <td className="review-left-side">Visit Type</td>
                      <td className="review-right-side">{visitType}</td>
                    </tr>
                    <tr>
                      <td className="review-left-side">Reason</td>
                      <td className="review-right-side">{reason}</td>
                    </tr>
                    <tr>
                      <td className="review-left-side">Insurance</td>
                      <td className="review-right-side">{insurance}</td>
                    </tr>
                    <tr>
                      <td className="review-left-side">Consultation fee</td>
                      <td className="review-right-side">₹{selectedDoctor.fee}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="alert info" style={{ marginTop: 16, marginBottom: 0 }}>
                  <div className="alert-icon">ℹ️</div>
                  <div className="alert-text">
                    You'll receive a confirmation SMS and email. Arrive 15 minutes early and bring
                    your recent lab reports.
                  </div>
                </div>
              </div>
              <div className="doc-next">
                <button className="btn" onClick={() => setStep(3)}>← Back</button>
                <button className="btn primary" onClick={handleConfirm}>✓ Confirm Booking</button>
              </div>
            </div>
          )}

          {/* Booking summary — mirrors the sum-doc/sum-spec/sum-date/etc updates */}
          <div>
            <div className="summary-card">
              <div className="summary-title">Booking Summary</div>
              <div className="summary-row">
                <div className="summary-label">Doctor</div>
                <div className="summary-text">{selectedDoctor.name}</div>
              </div>
              <div className="summary-row">
                <div className="summary-label">Speciality</div>
                <div className="summary-text">{selectedDoctor.spec}</div>
              </div>
              <div className="summary-row">
                <div className="summary-label">Hospital</div>
                <div className="summary-text">Apollo Hospitals, Jubilee Hills</div>
              </div>
              <div className="summary-row">
                <div className="summary-label">Date</div>
                <div className="summary-text">{selectedDateLabel || 'Not Selected'}</div>
              </div>
              <div className="summary-row">
                <div className="summary-label">Time</div>
                <div className="summary-text">{selectedTime || 'Not Selected'}</div>
              </div>
              <div className="summary-row">
                <div className="summary-label">Fee</div>
                <div className="summary-text">₹{selectedDoctor.fee}</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 14, lineHeight: 1.6 }}>
                Free cancellation up to 24 hours before your appointment. Rescheduling available
                anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
