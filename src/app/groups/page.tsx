import DeleteGroupBtn from "@/components/delete-group-btn";
import { db } from "@/db";
import { groupsTable } from "@/db/schema";

import { createGroup } from "../actions/create-group";


export default async function Groups() {
  const groups = await db.select().from(groupsTable);
    return (
    <div className="px-20 py-6">
        <h2 className="py-6 text-2xl font-bold text-violet-700">Groups</h2>
       <ul className="flex flex-wrap">
        {groups.map((group) => (
          <li key={group.id} className="border shadow rounded-2xl p-4 gap-4 py-3">
            <h3>{group.name}</h3>
            <DeleteGroupBtn id={group.id} />
            </li>
        ))}
      </ul>
      <div>
             <h3 className="text-violet-700 font-bold py-3">Create new group</h3>
             <form action={createGroup}>
              <label htmlFor="name" className="shadow border-2 rounded-2xl p-1 bg-violet-300">Group name</label>
              <input type="text" name="name" id="name" placeholder="Cohort 00 fs" className="shadow border-2 rounded-2xl p-1"/>
              <button type="submit" className="shadow border-2 rounded-2xl p-1 bg-violet-300">Save</button>
             </form>
              </div>
    </div>
  );
}

// notion, confluence
// cloude