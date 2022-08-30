import React from "react";
import { Alert } from 'react-bootstrap'

// Custom message component for the app to display and handle server errors
const Message = ({ variant, children }) => {
  return <Alert data-testid="alert" variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message