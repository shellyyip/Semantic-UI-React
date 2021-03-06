import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { updateForKeys } from 'docs/app/HOC'
import ComponentPropsExtra from './ComponentPropsExtra'
import ComponentPropsToggle from './ComponentPropsEnumToggle'
import ComponentPropsValue from './ComponentPropsEnumValue'

const ComponentPropsEnum = ({ limit, showAll, toggle, values }) => {
  const exceeds = values.length > limit
  const sliced = showAll ? values : _.slice(values, 0, limit)

  return (
    <ComponentPropsExtra inline title='Enums: '>
      {exceeds && (
        <ComponentPropsToggle
          toggle={toggle}
          total={values.length}
          showAll={showAll}
        />
      )}

      <div>
        {_.map(sliced, value => <ComponentPropsValue key={value}>{value}</ComponentPropsValue>)}
        {exceeds && !showAll && '...'}
      </div>
    </ComponentPropsExtra>
  )
}

ComponentPropsEnum.defaultProps = {
  limit: 10,
}

ComponentPropsEnum.propTypes = {
  limit: PropTypes.number,
  showAll: PropTypes.bool,
  toggle: PropTypes.func,
  values: PropTypes.array,
}

export default updateForKeys(['showAll'])(ComponentPropsEnum)
