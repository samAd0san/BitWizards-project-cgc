import React from 'react'

const Success = ({ msg }) => {

    const successMsg = msg || 'Success';

    return (
        <div>
            <h1 className="bg-green-500 text-white rounded m-4 p-2">{successMsg}</h1> {/* Printing the default or custom message (if specified) */}
        </div>
    )
}

export default Success      