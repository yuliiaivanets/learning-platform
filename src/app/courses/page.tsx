import { db } from "@/db";
import { coursesTable } from "@/db/schema";


export default async function Courses() {
 const courses = await db.select().from(coursesTable);
    return (
    <div className="px-20 py-6">
        <h2 className="py-6 text-2xl font-bold text-violet-700">Courses</h2>
        <ul className="flex flex-wrap">
            {courses.map(course => 
                <li key={course.id} className="border p-2 m-2 rounded-2xl schadow">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                </li>
            )}
        </ul>
        </div>
  )
}
