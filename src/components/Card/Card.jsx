import React, {useState} from "react"
import Subsection from "../../components/Subsection/Subsection"
import PropTypes from "prop-types"
import { ImagePlaceholder } from "../Placeholders/Placeholders"

import "./Card.css"

const Card = ({ item, handleOnclickUser, showSection, user }) => {
  const [imgLoad, setImgLoad] = useState(null);
  const onImgLoad = () => setImgLoad(true);

  return (
    <div className="card" onClick={() => handleOnclickUser(item)}>
    <div>
    {!imgLoad && <ImagePlaceholder />}
    <img src={item?.avatar_url} alt="Average Speed" onLoad={onImgLoad} className="card__image"/>
    </div>
    <div>
    {
      showSection && item?.id === user?.id &&
      <Subsection user={user}/>
    }
    </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleOnclickUser: PropTypes.func.isRequired,
  showSection: PropTypes.bool.isRequired,
}

export default Card