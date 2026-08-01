import { useState } from "react";
import Fizz from "../assets/fizz.png";
import Funbate from "../assets/funbate.png";
import SpeakUp from "../assets/speakup.png";
import MarketMaster from "../assets/marketmaster.png";
import EscapeRoom from "../assets/escaperoom.png";
import Closed from "../assets/closed.png";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    section: "",
    rollNo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [escapeRoomSelected, setEscapeRoomSelected] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let events = [...selectedEvents];

    if (escapeRoomSelected) {
      events.push("Escape Room");
    }

    const data = {
      ...formData,
      events,
    };

    try {
      const res = await fetch("http://localhost:5500/api/students/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Registration Successful!");

        setFormData({
          name: "",
          class: "",
          section: "",
          rollNo: "",
        });

        setSelectedEvents([]);
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  const Events = [
    {
      Name: "FIZZ (Quiz)",
      Description:
        "Think fast, answer smart, and prove you're the ultimate quiz champion!",
      Img: Fizz,
    },
    {
      Name: "FUNBATE (Debate)",
      Description:
        "Share your funniest arguments, laugh together, and let your creativity shine!",
      Img: Funbate,
    },
    {
      Name: "SPEAK UP (Pick & Speach)",
      Description:
        "Pick a surprise topic, speak with confidence, and own the spotlight!",
      Img: SpeakUp,
    },
    {
      Name: "MARKET MASTER (Product Pitch)",
      Description:
        "Turn crazy ideas into winning pitches and sell like a true entrepreneur!",
      Img: MarketMaster,
    },
  ];

  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleEventChange = (eventName) => {
    if (selectedEvents.includes(eventName)) {
      setSelectedEvents(selectedEvents.filter((event) => event !== eventName));
    } else {
      setSelectedEvents([...selectedEvents, eventName]);
    }
  };

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-col items-center justify-center gap-4 mb-5">
          <p className="text-(--primary) font-bold text-2xl">REGISTRATION</p>
          <h1>Register for Freshers' Day 2026</h1>
        </div>

        <div
          id="Events"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto w-full justify-items-center"
        >
          {Events.map((Event) => {
            return (
              <div
                key={Event.Name}
                className="w-full max-w-sm p-4 border border-(--border) rounded-xl shadow-md"
              >
                <img src={Event.Img} alt={Event.Name} />

                <h1 className="text-xl font-semibold mt-3">{Event.Name}</h1>

                <p className="text-(--text-light)">{Event.Description}</p>

                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    checked={selectedEvents.includes(Event.Name)}
                    onChange={() => handleEventChange(Event.Name)}
                  />

                  <label>Participate</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justfiy-center items-center mt-5 w-full mb-15">
          <div className="mt-10">
            <h1 className="text-(--text-light) text-2xl">
              The Escape Room Door is Locked
            </h1>
            <h1 className="text-(--text) text-2xl font-semibold">
              Join any 2 Events to find the{" "}
              <span className="text-(--primary) font-bold text-2xl">
                KEY...!
              </span>
            </h1>
          </div>

          <div className="relative w-full max-w-sm p-4 border border-(--border) rounded-xl shadow-md m-5">
            <img src={EscapeRoom} alt="" />

            {/* Overlay */}
            {selectedEvents.length < 2 && (
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
            )}

            {/* Lock Image */}
            {selectedEvents.length < 2 && (
              <div className="absolute inset-0 flex justify-center items-center top-2">
                <img src={Closed} alt="" className="h-40 z-10" />
              </div>
            )}
            <h1 className="text-xl font-semibold mt-3">Escape Room</h1>
            <p className="text-(--text-light)">
              Some doors aren't meant to stay locked... Dare to discover what
              lies beyond?
            </p>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                disabled={selectedEvents.length < 2}
                checked={escapeRoomSelected}
                onChange={(e) => setEscapeRoomSelected(e.target.checked)}
              />

              <label>Participate</label>
            </div>
          </div>
        </div>

                <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Student Registration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}

            <div>
              <label className="font-medium">Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            {/* Class */}

            <div>
              <label className="font-medium">Class</label>

              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="">Select Class</option>
                <option>BCA</option>
                <option>BCom</option>
                <option>BSc</option>
                <option>BA</option>
                <option>BBA</option>
              </select>
            </div>

            {/* Section */}

            <div>
              <label className="font-medium">Section</label>

              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option value="">Select Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>

            {/* Roll Number */}

            <div>
              <label className="font-medium">Roll Number</label>

              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter Roll Number"
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>
          </div>

          {/* Selected Events */}

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-3">Selected Events</h3>

            <div className="flex flex-wrap gap-3">
              {selectedEvents.map((event) => (
                <span
                  key={event}
                  className="bg-(--primary) text-white px-4 py-2 rounded-full"
                >
                  {event}
                </span>
              ))}

              {selectedEvents.length >= 2 && (
                <span className="bg-green-700 text-white px-4 py-2 rounded-full">
                  Escape Room
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-(--primary) text-white py-4 rounded-lg hover:bg-(--primary-hover)"
          >
            Register Now
          </button>
        </form>

      </section>
    </>
  );
}

export default Registration;
