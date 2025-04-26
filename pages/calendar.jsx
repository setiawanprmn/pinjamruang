import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // untuk klik & drag

export default function CalendarPage() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={[
          { title: 'Rapat Ruang 204', start: '2025-04-25' },
          { title: 'Kuliah Umum', start: '2025-04-26', end: '2025-04-27' }
        ]}
        dateClick={(info) => alert(`Kamu klik tanggal: ${info.dateStr}`)}
      />
    </div>
  );
}
