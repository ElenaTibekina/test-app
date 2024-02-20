import {useMemo, memo} from "react";
import {Button} from "../Button";
import {User} from '../types'


type ListItemProps = {
    user: User;
    onSetActiveClick: () => void;
    filter: string;
}

export const ListItem = memo(({ user, onSetActiveClick, filter }: ListItemProps) => {
    const highlightSubstring = useMemo(() => {
        const index = user.name.toLowerCase().indexOf(filter.toLowerCase());
        if (index !== -1) {
            return (
                <>
                    <span>{user.name.substring(0, index)}</span>
                    <span className="bg-yellow-200">{user.name.substring(index, index + filter.length)}</span>
                    <span>{user.name.substring(index + filter.length)}</span>
                </>
            );
        }
        return user.name;
    }, [user.name, filter]);

    return (
        <li className="relative flex items-center mb-2 mx-0 my-3">
            {user.active && (<div className="absolute w-2 h-2 rounded-full bg-green-500" />)}
            <div className="ml-3 text-black">{highlightSubstring}</div>
            {!user.active && (
                <Button
                    text="set active"
                    onClick={onSetActiveClick}
                    className="absolute right-0 top-0 border border-green-500 text-green-500 px-2 py-1 rounded uppercase text-xs"
                />
            )}


        </li>
    );
});
