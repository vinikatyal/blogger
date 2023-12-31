"use client";

import { useRouter } from "next/navigation";

type RemoveProps = {
    id: string;
}

export default function RemoveBtn({ id }: RemoveProps) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`/api/blogs?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400">
            Remove
        </button>
    );
}