import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import ConfirmationModal from './components/ConfirmationModal.jsx'
import Overview from './pages/Overview.jsx'
import BookAppointment from './pages/BookAppointment.jsx'
import Appointments from './pages/Appointments.jsx'
import LabResults from './pages/LabResults.jsx'
import Vitals from './pages/Vitals.jsx'
import Medications from './pages/Medications.jsx'
import Reports from './pages/Reports.jsx'
import { initialAppointments } from './data.js'

export default function App() {
  const [page, setPage] = useState('overview')
  const [appointments, setAppointments] = useState(initialAppointments)
  const [modalOpen, setModalOpen] = useState(false)
  const [lastBooking, setLastBooking] = useState(null)
  const mainRef = useRef(null)

  // Mirrors `document.querySelector('.main').scrollTop = 0` in showPage()
  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0
  }, [page])

  const handleConfirmBooking = (booking) => {
    setLastBooking(booking)
    setModalOpen(true)

    // Beyond what script.js does (which only shows the modal): also add a
    // real pending appointment to the list, so Appointments reflects the
    // booking you just made.
    setAppointments((prev) => [
      {
        id: Date.now(),
        name: booking.doctor.name,
        spec: booking.doctor.spec,
        hospital: booking.doctor.hospital,
        date: booking.date,
        time: booking.time,
        status: 'pending',
        statusLabel: 'Pending',
        avatarColor: booking.doctor.availChip,
        initials: booking.doctor.initials,
        kind: 'upcoming',
      },
      ...prev,
    ])
  }

  const handleCancelAppointment = (id) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id))
  }

  const closeModal = () => setModalOpen(false)
  const viewAppointmentsFromModal = () => {
    setModalOpen(false)
    setPage('appointments')
  }

  return (
    <>
      <Sidebar page={page} setPage={setPage} />
      <div className="main" ref={mainRef}>
        {page === 'overview' && <Overview setPage={setPage} appointments={appointments} />}
        {page === 'book' && (
          <BookAppointment setPage={setPage} onConfirmBooking={handleConfirmBooking} />
        )}
        {page === 'appointments' && (
          <Appointments setPage={setPage} appointments={appointments} onCancel={handleCancelAppointment} />
        )}
        {page === 'labs' && <LabResults setPage={setPage} />}
        {page === 'vitals' && <Vitals />}
        {page === 'medications' && <Medications />}
        {page === 'reports' && <Reports />}
      </div>

      <ConfirmationModal
        open={modalOpen}
        booking={lastBooking}
        onClose={closeModal}
        onViewAppointments={viewAppointmentsFromModal}
      />
    </>
  )
}
