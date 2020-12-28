import React from 'react'
import PropTypes from 'prop-types'

function Header({title, rank})
{
      const titleEl = React.createElement('h'+rank, { className: 'h'+rank }, title);
    return (
        <>
            {titleEl}
        </>
    )
}
Header.defaultProps = {
    rank: 2,
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
}

export default Header

