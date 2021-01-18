import React, {useEffect, useState, Fragment} from "react"
import Card from "../../components/Card/Card"
import { requestUsers } from "../../services/userService"

import "./Home.css"

const Home = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [showSection, setshowSection] = useState(false)

  const getusers = async () => {
    const result = await requestUsers()
    setUsers(result)
  }

  useEffect(() => {
    getusers()
  }, [])

  const handleOnclickUser = (val) => {
    setUser(val)

    if(val.id === user.id) {
      setshowSection(!showSection)
    } else {
      setshowSection(true)
    }
  }

  return (
  <Fragment>
    {
      users.length === 0 ? <div className="page__loader" /> 
        :
    <div className="card__container">
    {
      users?.map((val) => {
        return (
      <Fragment key={val.id}>
        <Card handleOnclickUser={handleOnclickUser} item={val} user={user} showSection={showSection} />
      </Fragment>
       )
      })
    }
  </div>
    }
  </Fragment>
  )
}

export default Home