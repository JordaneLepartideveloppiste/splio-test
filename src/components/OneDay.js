
const OneDay = ({ event, setShowModal, setEventId }) => {

  const handleClick = () => {
    setEventId(event.id)
    setShowModal(true)
   
  };

  return (
    <>
      <td className="one-day" key={event.id} onClick={handleClick}>
        <button
          className="one-day-btn"
          style={{
            backgroundColor: event.color,
            border: event.color
              ? "1px solid" + event.color
              : "1px solid lightgray",
          }}
        >
          {event.id}
        </button>
        <div
          className="one-day-title"
          style={{
            border: event.color
              ? "1px solid" + event.color
              : "1px solid lightgray",
          }}
        >
          <span style={{ color: event.color ? event.color : "black" }}>
            {event.title}
          </span>
        </div>
      </td>
    </>
  );
};



export default OneDay;