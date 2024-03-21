import React, { useState, useEffect } from 'react';


const Progressbar = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [friend, setfriend] = useState(0);

    const toggleSelectedFriend = (friendId: any) => {
        setSelectedFriend(friendId === selectedFriend ? null : friendId);
    };

    const handleNextFriend = () => {
        if (friend + 4 <= friends.length) {
            setfriend(friend + 4);
        }
    }

    const handlePreFriend = () => {
        if (friend - 4 >= 0) {
            setfriend(friend - 4);
        }
    }

    const friends = [
        { id: 1, name: "Friend1", theme: "Theme1", scores: "25" },
        { id: 2, name: "Friend2", theme: "Theme2", scores: "50" },
        { id: 3, name: "Friend3", theme: "Theme3", scores: "75" },
        { id: 4, name: "Friend4", theme: "Theme4", scores: "100" },
        { id: 5, name: "Friend5", theme: "Theme4", scores: "100" }
    ];



    return (
        <div>
            <div className="bg-orange-500 p-3 w-full text-white rounded-t-lg grid grid-cols-3 h-[50px] items-center">
                <button className='text-2xl justify-self-center' onClick={handlePreFriend}> &lt; </button>
                <span className='justify-self-center'> Friend </span>
                <button className='text-2xl justify-self-center' onClick={handleNextFriend}> &gt; </button>
            </div>

            <div className="bg-white p-4 rounded-b-lg h-auto drop-shadow-xl mb-5">
                <div className="space-y-5">
                    {friends.slice(friend, friend + 4).map((friend) => (
                        <div
                            key={friend.id}
                            className={`bg-white rounded-xl p-4 drop-shadow-xl mx-4 hover:scale-105 transition-transform 
                                     ${friend.id === selectedFriend ? "scale-105 border-2 border-orange-500" : ""
                                }`}
                            onClick={() => toggleSelectedFriend(friend.id)}
                        >
                            <div className="grid grid-cols-2">
                                <p className="col-start-1">{friend.name}</p>
                                <p className="mb-3 col-start-2 text-right">{friend.theme}</p>
                            </div>

                            <div
                                id={`${friend.id}`}
                                className="bg-orange-100 h-5 border border-orange-500 w-full rounded-md"
                            >
                                <div
                                    className={`h-full bg-orange-500 transition-width duration-200 flex items-center justify-center hover:bg-orange-400
                                        ${friend.id === selectedFriend ? "bg-orange-600" : ""
                                        }`}
                                    style={{ width: `${friend.scores}%` }}
                                >
                                    <span className="text-white">{friend.scores}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Progressbar;
