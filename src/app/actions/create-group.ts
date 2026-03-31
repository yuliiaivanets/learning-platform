"use server";

import { db } from "@/db";
import { groupsTable } from "@/db/schema";

import { redirect } from "next/navigation";

export async function createGroup(formData: FormData) {
  const name = formData.get("name")!.toString();
  //console.log(name);
  const newGroup = { name };
  await db.insert(groupsTable).values(newGroup);
  //переход на страницу по пути
  redirect("/groups");
}

//! - ставиться справа, чтобы опустить проверку
// и дать компилятору понять, ято там есть данные
