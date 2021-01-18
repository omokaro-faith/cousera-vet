import axios from "axios";

export const requestUsers = async () => {
  try {
    const response = await axios.get("https://api.github.com/users")

    return response?.data
  }catch(err){
    return err
  }
}
