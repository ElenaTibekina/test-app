import React, {useState, useCallback} from "react";
import {ListItem} from "../ListItem";
import {User} from '../types'
import {usersList} from '../consts'


export const List = () => {
    const [activeElement, setActiveElement] = useState<number | null>(null);

    const [filter, setFilter] = useState<string>("");

    const filteredUsers: User[] = usersList.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleOnSetActiveClick = useCallback((index) => {
        setActiveElement(index);
    }, [])

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-400 w-full md:w-64 rounded-md px-3 py-2 mb-4"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="w-full md:w-64">
                {filteredUsers.map((user, index) => (
                    <ListItem
                        key={index}
                        user={{ ...user, active: activeElement === index }}
                        onSetActiveClick={() => handleOnSetActiveClick(index)}
                        filter={filter}
                    />
                ))}
            </ul>
        </div>
    );
}
