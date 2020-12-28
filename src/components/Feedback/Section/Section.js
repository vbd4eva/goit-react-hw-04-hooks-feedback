import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import s from "./Section.module.css"



function Section({ title, headerRank, children }) {
    return (
        <section className={s.section}>
            <Header title={title} rank={headerRank} />            
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section

