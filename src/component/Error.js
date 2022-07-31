import React from 'react'

export default function Error({dataweather}) {
    return (
        <div>
            {dataweather.message}
        </div>
    )
}
