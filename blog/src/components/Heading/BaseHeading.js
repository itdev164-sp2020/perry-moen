import React from 'react'
import PropTypes from 'prop-types'
import{Heading} from 'rebass'


const BaseHeading = ({children,...rest}) =>
<Heading {...rest}>{children}</Heading>


BaseHeading.propTypes ={
  children: PropTypes.node.isRequired
}

export {BaseHeading}
// TODO: not sure why export is used here and not for list or ListItem for example.
