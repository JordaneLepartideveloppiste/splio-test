import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEvent} from "../actions/events.actions";
import { colors } from "../colors";


const ModalEvent = ({setShowModal, eventId}) => {
   
    const event = useSelector((state) =>
      state.eventsReducer.filter((event) => event.id === eventId)
    );

    const dispatch = useDispatch();

    const [eventForm, setEventForm] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    
    const dayD = event[0];

    const colorSelectedIndex = colors.findIndex(color => color.code === dayD.color);
    const othersColors = colors.slice(colorSelectedIndex);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleSelect = (e) => {
        setSelectedColor(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    if (title) {
        const eventData = {
          id: dayD.id,
          day: dayD.day,
          title: title,
          color: selectedColor,
        };
        dispatch(addEvent(eventData));
        setShowModal(false);
      }      
    }

    const handleDeleteEvent = (e) => {
      e.preventDefault();
      setTitle("");
      setSelectedColor("");
      const eventData = {
        id: dayD.id,
        day: dayD.day,
        title: title,
        color: selectedColor,
      };
      dispatch(addEvent(eventData));
      setShowModal(false);

    }

    return (
      <div className="modal-event">
        <div className="modal-event-content">
          <div className="modal-header">
            <div
              className="day-title"
              style={{
                backgroundColor: dayD.color ? dayD.color : "#8AE008",
                color: "#fff",
              }}
            >
              <span>{dayD.day}</span>
              <span>{dayD.id}</span>
              <span>Janvier</span>
            </div>
            <button
              id="close-modal-btn"
              onClick={() => setShowModal(false)}
              style={{
                color: dayD.color ? dayD.color : "#8AE008",
                border: dayD.color
                  ? "1px solid" + dayD.color
                  : "1px solid #8AE008",
              }}
            >
              X
            </button>
          </div>
          {eventForm ? (
            <form className="event-form" onSubmit={handleSubmit}>
              {!dayD.title ? (
                <>
                  <input
                    type="text"
                    className="input-title"
                    value={title}
                    placeholder="Un nom pour votre évènement"
                    required="true"
                    onChange={handleChangeTitle}
                    style={{
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  />
                  <select
                    className="select-color"
                    value={selectedColor}
                    onChange={handleSelect}
                    style={{
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  >
                    <option value="" disabled selected>
                      Voulez-vous ajouter une couleur à votre évènement ?
                    </option>
                    {colors.map((color, index) => {
                      return (
                        <option
                          value={color.code}
                          key={index}
                          style={{ backgroudColor: color.code }}
                        >
                          {color.name}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="submit"
                    value="Ajouter"
                    className="btn"
                    style={{
                      color: dayD.color ? dayD.color : "#8AE008",
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="input-title"
                    value={title}
                    placeholder={dayD.title}
                    required="true"
                    onChange={handleChangeTitle}
                    style={{
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  />
                  <select
                    className="select-color"
                    value={selectedColor}
                    onChange={handleSelect}
                    style={{
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  >
                    {!dayD.color ? (
                      <>
                        <option value="" disabled selected>
                          Voulez-vous ajouter une couleur à votre évènement ?
                        </option>

                        {colors.map((color, index) => {
                          return (
                            <option
                              value={color.code}
                              key={index}
                              style={{
                                backgroudColor: color.code,
                                color: "white",
                              }}
                            >
                              {color.name}
                            </option>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <option
                          value={dayD.color}
                          style={{
                            backgroudColor: dayD.color,
                            color: "white",
                          }}
                        >
                          Changer la couleur
                        </option>
                        {othersColors.map((color, index) => {
                          return (
                            <option
                              value={color.code}
                              key={index}
                              style={{
                                backgroudColor: color.code,
                                color: "white",
                              }}
                            >
                              {color.name}
                            </option>
                          );
                        })}
                      </>
                    )}
                  </select>
                  <input
                    type="submit"
                    value="Modifier"
                    className="btn"
                    style={{
                      color: dayD.color ? dayD.color : "#8AE008",
                      border: dayD.color
                        ? "1px solid" + dayD.color
                        : "1px solid #8AE008",
                    }}
                  />
                </>
              )}
            </form>
          ) : (
            <div className="resume-event">
              <div
                className="event-title"
                style={{ color: dayD.color ? dayD.color : "#8AE008" }}
              >
                {dayD.title
                  ? dayD.title
                  : "Aucun évènement n'est encore programmé"}
              </div>
              <div className="event-btn">
                {dayD.title ? (
                  <>
                    <button
                      onClick={() => setEventForm(true)}
                      className="btn"
                      style={{
                        color: dayD.color ? dayD.color : "#8AE008",
                        border: dayD.color
                          ? "1px solid" + dayD.color
                          : "1px solid #8AE008",
                      }}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={handleDeleteEvent}
                      className="btn"
                      style={{
                        color: dayD.color ? dayD.color : "#8AE008",
                        border: dayD.color
                          ? "1px solid" + dayD.color
                          : "1px solid #8AE008",
                      }}
                    >
                      Supprimer
                    </button>
                  </>
                ) : (
                  <button
                    id="create-event-btn"
                    className="btn"
                    onClick={() => setEventForm(true)}
                  >
                    Créer
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ModalEvent;