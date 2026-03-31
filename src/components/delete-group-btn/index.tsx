"use client";

import { deleteGroup } from "@/app/actions/delete-group";

interface Props {
    id:number;
}

export default function DeleteGroupBtn({id}: Props) {
    return (<button type="button" className="cursor-pointer rounded-2xl border-2 p-1 bg-amber-600" onClick={()=> deleteGroup(id)}>
        Delete
    </button>
    );
}