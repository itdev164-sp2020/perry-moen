import React from 'react'
import PropTypes from 'prop-types'
import{Heading} from 'rebass'


export const BaseHeading = ({children,...rest}) =>
<Heading {...rest}>{children}</Heading>


BaseHeading.propTypes ={
  children: PropTypes.node.isRequired
}

//export {BaseHeading}
// TODO: not sure why export is used here and not for list or ListItem for example.
//Looks Like we were able to just move export above next to the const without having to
//Export it at the end. Just another way to do it it seems.Note you can only have one export.
