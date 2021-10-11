
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/css/App.css';
import logo from "../styles/img/calendar-icon-png-4118.png"
import ModalEvent from './ModalEvent';
import OneDay from './OneDay';

function App() {

  const user = useSelector((state) => state.userReducer);
  const events = useSelector((state) => state.eventsReducer);
  
  const [showModal, setShowModal] = useState(false);
  const [eventId, setEventId] = useState();
 

  return (
    <div className="App">
      <div className="header" style={{ borderBottom: "4px solid #8AE008" }}>
        <img id="logo" src={logo} alt="logo" />
        <h1>Mon Agenda</h1>
      </div>
      <div className="sub-header" style={{ borderBottom: "2px solid #8AE008" }}>
        <span id="welcome">Bienvenue, </span>
        <span id="pseudo">{user.name}</span>
      </div>
      <div className="calendar">
        <h3>Janvier</h3>
        <table style={{ height: "380px", width: "600px" }}>
          <thead>
            <tr>
              <th>D</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {events &&
                events
                  .filter((event) => event.week === 1)
                  .map((event) => {
                    return (
                      <OneDay
                        key={event.id}
                        event={event}
                        setShowModal={setShowModal}
                        setEventId={setEventId}
                      />
                    );
                  })}
            </tr>
            <tr>
              {events &&
                events
                  .filter((event) => event.week === 2)
                  .map((event) => {
                    return (
                      <OneDay
                        key={event.id}
                        event={event}
                        setShowModal={setShowModal}
                        setEventId={setEventId}
                      />
                    );
                  })}
            </tr>
            <tr>
              {events &&
                events
                  .filter((event) => event.week === 3)
                  .map((event) => {
                    return (
                      <OneDay
                        key={event.id}
                        event={event}
                        setShowModal={setShowModal}
                        setEventId={setEventId}
                      />
                    );
                  })}
            </tr>
            <tr>
              {events &&
                events
                  .filter((event) => event.week === 4)
                  .map((event) => {
                    return (
                      <OneDay
                        key={event.id}
                        event={event}
                        setShowModal={setShowModal}
                        setEventId={setEventId}
                      />
                    );
                  })}
            </tr>
            <tr>
              {events &&
                events
                  .filter((event) => event.week === 5)
                  .map((event) => {
                    return (
                      <OneDay
                        key={event.id}
                        event={event}
                        setShowModal={setShowModal}
                        setEventId={setEventId}
                      />
                    );
                  })}
            </tr>
          </tbody>
        </table>
      </div>
      {showModal && (
        <ModalEvent
          events={events}
          setShowModal={setShowModal}
          eventId={eventId}
        />
      )}
    </div>
  );
}



export default App;
