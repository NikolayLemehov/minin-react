import React from "react";

export const Alert = ({alert}) => {
  if (!alert) {
    return null
  }
  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
