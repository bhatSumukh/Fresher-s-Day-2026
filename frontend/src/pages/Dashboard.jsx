import { useState, useEffect } from "react";
function Dashboard() {
  const [students, setStudents] = useState([]);
  console.log(students);

  const fetchStudents = async () => {
    try {
      const res = await fetch("https://fresher-s-day-2026.onrender.com/api/students");

      const result = await res.json();

      if (result.success) {
        setStudents(result.students);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const events = [
    "FIZZ (Quiz)",
    "FUNBATE (Debate)",
    "SPEAK UP (Pick & Speech)",
    "MARKET MASTER (Product Pitch)",
    "Escape Room",
  ];
  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-start justfiy-center gap-5">
        <div className="flex flex-col items-start justfiy-around bg-(--surface) w-full p-4">
          <h1 className="text-2xl text-(--primary) font-semibold ">
            Freshers Dashboard
          </h1>
          <p>
            Total Registrations :{" "}
            <span className="text-(--text) font-semibold">
              {students.length}
            </span>
          </p>
        </div>

        {events.map((event) => {
          const eventStudents = students.filter((student) =>
            student.events.includes(event),
          );

          return (
            <div key={event} className="p-1 w-full">
              <h2 className="font-semibold text-(--primary) border-b-2 w-max border-(--primary)">{event}</h2>
              <p>{eventStudents.length} Students</p>

              <table className="bg-(--surface) w-full border-2 border-(--border) text-start">
                <thead>
                  <tr className="border-b-2 border-(--text)">
                    <th className="border-2 border-(--border) text-start p-1">NAME</th>
                    <th className="border-2 border-(--border)  text-start p-1">CLASS</th>
                    <th className="border-2 border-(--border) text-start p-1">RollNo</th>
                  </tr>
                </thead>
                <tbody className="p-2">
                  {eventStudents.map((student) => (
                    <tr key={student._id}>
                      <td className="border-2 border-(--border) p-1">{student.name}</td>
                      <td className="border-2 border-(--border) p-1">{student.class}</td>
                      <td className="border-2 border-(--border) p-1">{student.rollNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Dashboard;
