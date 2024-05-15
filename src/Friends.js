import React from 'react';

const Friends = ({ friends }) => {
    return (
        <>
            {friends.map((Data) => {
                return (
                    <>
                        <div>
                            <h3>{Data.name}</h3>
                        </div>

                    </>
                )
            })}
        </>
    )
}

export default Friends
