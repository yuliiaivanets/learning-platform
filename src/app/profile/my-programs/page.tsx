export default function MyPrograms() {
  const programs = [
    { id: 0, title: "Basic Frontend" },
    { id: 1, title: "Advanced Frontend" },
    { id: 2, title: "Backend" },
  ];
  return (
    <div>
      <h2  className="text-violet-700 font-bold text-2xl">Programs</h2>
      <ul>
        {programs.map((program) => (
          <li key={program.id} className="p-2 rounded shadow bg-amber-100">{program.title}</li>
        ))}
      </ul>
    </div>
  );
}