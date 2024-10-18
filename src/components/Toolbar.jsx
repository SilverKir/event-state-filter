

import PropTypes from 'prop-types'

export function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <>
            {filters.map((filter) =>
                <button key={filter} id={filter} className={
                    filter === selected ?
                        "selected" :
                        ""
                } onClick={onSelectFilter}> {filter}
                </button>
            )}
        </>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func.isRequired
}


