import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import idLocale from '@fullcalendar/core/locales/id';
import './calendar.css'; // Buat file CSS terpisah

export default function CalendarPage() {
  const [events, setEvents] = useState([
    { 
      title: 'Rapat Proyek - Ruang 205', 
      start: '2025-05-10T10:00:00',
      end: '2025-05-10T12:00:00',
      color: '#009ef7'
    },
    { 
      title: 'Seminar - Aula FT', 
      start: '2025-05-15T09:00:00',
      end: '2025-05-15T16:00:00',
      color: '#00ae1c'
    },
    { 
      title: 'Ujian Akhir - Ruang 301', 
      start: '2025-05-20',
      end: '2025-05-22',
      color: '#de2828'
    }
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Masukkan judul acara:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: arg.dateStr,
          color: '#009ef7'
        }
      ]);
    }
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-header">Jadwal Peminjaman Ruangan</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={[idLocale]}
        locale="id"
        firstDay={1}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={(info) => {
          alert(`Detail: ${info.event.title}\nMulai: ${info.event.start.toLocaleString()}`);
        }}
      />
    </div>
  );
}