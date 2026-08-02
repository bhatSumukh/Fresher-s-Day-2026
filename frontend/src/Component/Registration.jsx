import { useState } from "react";
import Fizz from "../assets/fizz.png";
import Funbate from "../assets/funbate.png";
import SpeakUp from "../assets/speakup.png";
import MarketMaster from "../assets/marketmaster.png";
import EscapeRoom from "../assets/escaperoom.png";
import Closed from "../assets/closed.png";
import { toast } from "react-hot-toast";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    section: "",
    rollNo: "",
  });

  const [status, setStatus] = useState("idle");

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
      const res = await fetch(
        "https://fresher-s-day-2026.onrender.com/api/students/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();

      if (result.success) {
        toast.success("Registration Successful!");

        setStatus("idle");

        setFormData({
          name: "",
          class: "",
          section: "",
          rollNo: "",
        });

        setSelectedEvents([]);
        setEscapeRoomSelected(false);
      } else {
        toast.error(result.message || "Registration Failed!");
        setStatus("failed");

        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Registration Failed!");
      setStatus("failed");

      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }
  };

  const Events = [
    {
      Name: "FIZZ (Quiz)",
      Description:
        "Think fast, answer smart, and prove you're the ultimate quiz champion!",
      Img: Fizz,
      Date: "4th Aug",
    },
    {
      Name: "FUNBATE (Debate)",
      Description:
        "Share your funniest arguments, laugh together, and let your creativity shine!",
      Img: Funbate,
      Date: "4th Aug",
    },
    {
      Name: "SPEAK UP (Pick & Speech)",
      Description:
        "Pick a surprise topic, speak with confidence, and own the spotlight!",
      Img: SpeakUp,
      Date: "5th Aug",
    },
    {
      Name: "MARKET MASTER (Product Pitch)",
      Description:
        "Turn crazy ideas into winning pitches and sell like a true entrepreneur!",
      Img: MarketMaster,
      Date: "6th Aug",
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
      <section
        id="registration"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-4 mb-5">
          <p className="text-(--primary) font-bold text-2xl">REGISTRATION</p>
          <h1>Register for Freshers' Day Event 2026</h1>
          <p className="text-(--text-light) p-5">
            <span className="text-(--primary) font-semibold">
              NOTE: <br />{" "}
            </span>
            You can only register one time. Make sure to sumbit all the details
            correctly <br />
            Cick the checkbox to select the event you want to participate in.{" "}
            <br />
            After clicking{" "}
            <span className="font-semibold text-(--text)">Register</span>,
            please wait a few seconds while we process your registration. Do not
            refresh or close the page.
          </p>
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

                <p className="text-(--text)">{Event.Date}</p>

                <p className="text-(--text-light)">{Event.Description}</p>

                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    checked={selectedEvents.includes(Event.Name)}
                    onChange={() => handleEventChange(Event.Name)}
                    className="accent-(--primary) w-5 h-5 "
                  />

                  <label>Participate</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justfiy-center items-center mt-5 w-full mb-15">
          <div className="mt-10">
            {selectedEvents.length < 2 ? (
              <h1 className="text-(--text) font-semibold text-center">
                Join any 2 Events to find the{" "}
                <span className="text-(--primary) font-bold">KEY...!</span>{" "}
                <br />
                The Escape Room Door is Locked
              </h1>
            ) : (
              <h1 className="text-(--text) font-semibold text-center">
                You Found the{" "}
                <span className="text-(--primary) font-bold">Key..!</span>
                <br />
                Check the box below if you'd like to participate.
              </h1>
            )}
          </div>

          <div className="relative w-full max-w-sm p-4 border border-(--border) rounded-xl shadow-md m-5">
            <img src={EscapeRoom} alt="" />

            {/* Overlay */}
            {selectedEvents.length < 2 && (
              <div className="absolute inset-0 bg-(--primary)/20 rounded-xl"></div>
            )}

            {/* Lock Image */}
            {selectedEvents.length < 2 && (
              <div className="absolute inset-0 flex justify-center items-center top-2">
                <img src={Closed} alt="" className="h-40 z-10" />
              </div>
            )}
            <h1 className="text-xl font-semibold mt-3">Escape Room</h1>
            <p className="text-(--text)">7th Aug</p>
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
                className="accent-(--primary) w-5 h-5 "
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
          <p className="p-2">
            After clicking{" "}
            <span className="font-semibold text-(--text)">Register</span>,
            please wait a few seconds while we process your registration. Do not
            refresh or close the page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {escapeRoomSelected && (
                <span className="bg-green-700 text-white px-4 py-2 rounded-full">
                  Escape Room
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`mt-8 w-full  text-white py-4 rounded-lg hover:bg-(--primary-hover)
                ${
                  status === "loading"
                    ? "bg-blue-600 cursor-not-allowed"
                    : status === "failed"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-(--primary) hover:bg-(--primary-hover)"
                }
                `}
          >
            {status === "loading"
              ? "Registering..."
              : status === "failed"
                ? "Registration Failed"
                : "Register Now"}
          </button>
        </form>
      </section>
    </>
  );
}

export default Registration;
