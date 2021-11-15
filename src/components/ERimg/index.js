import React from 'react'

const ERimg = ({ src, alt, width, height }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="er-img"
            style={{ width: `${width}px`, height: `${height}px` }} />

    )
}
export default ERimg
