import React from "react"
import PropTypes from "prop-types"

const Subsection = ({user}) => {
  return (
    <div className="card__seconditem">
    <span>Name: {user.login} </span>
    <span>Id: {user.id} </span>
    <span>Site Admin: {user.site_admin ? "True" : "False"}</span>
    <span><a href={user.url}>User URL</a></span>
    </div>
  )
}

Subsection.propTypes = {
  user: PropTypes.object.isRequired,
}


export default Subsection