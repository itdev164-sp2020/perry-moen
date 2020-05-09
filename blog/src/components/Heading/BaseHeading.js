import React from 'react'
import PropTypes from 'prop-types'
import{Heading} from 'rebass'


export const BaseHeading = ({children,...rest}) =>(
  return <BaseHeading>{children}<BaseHeading>

)


BaseHeading.propTypes ={
  children: PropTypes.node.isRequried
}

export {BaseHeading}
// TODO: not sure why export is used here and not for list or ListItem for example.
