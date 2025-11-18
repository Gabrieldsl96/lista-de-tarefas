"use client";

import { AddArea } from "@/components/AddArea";
import { ListItem } from "@/components/ListItem";
import { Item } from "@/types/item";
import { useState } from "react";

const HomePage = () => {
    const [list, setList] = useState<Item[]>([]);

    const handleAddTask = (taskName: string) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        })
        setList(newList)
    }

    const handleToggleDone = (id: number) => {
        setList(list.map(item =>
            item.id === id
                ? { ...item, done: !item.done }
                : item
        ));
    }

    return (
        <div className="w-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <h1 className="m-0 p-0 mt-5 text-white text-center border-b border-[#444] pb-[20px] text-4xl font-bold">Lista de Tarefas</h1>

            <AddArea onEnter={handleAddTask} />

            {list.map((item, index) => (
                <ListItem
                    key={index}
                    item={item}
                    onToggle={handleToggleDone}
                />
            ))}

        </div>
    )
};

export default HomePage; 