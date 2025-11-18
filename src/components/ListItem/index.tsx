import { Item } from "@/types/item"
import { useState } from "react"

type Props = {
    item: Item
    onToggle: (id: number) => void
}

export const ListItem = ({ item, onToggle }: Props) => {
    return (
        <div className="flex bg-[#20212C] p-[10px] rounded-[10px] mb-[10px] items-center">
            <input
                type="checkbox"
                checked={item.done}
                onChange={() => onToggle(item.id)}
                className="w-[25px] h-[25px] mr-[15px]"
            />
            <label className={`${item.done ? 'line-through' : ''}`}>{item.name}</label>
        </div>
    )
}