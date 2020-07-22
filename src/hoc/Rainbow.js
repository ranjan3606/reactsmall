import React from 'react'

const Rainbow = (WrapperComponent) => {
    const colors = ['red', 'blue', 'pink', 'orange', 'green', 'yellow']
    const randomColor = colors[Math.floor(Math.random() * 5)]
    const className = randomColor + '-text'

    return (props) => {
        return(
            <div className={className}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default Rainbow