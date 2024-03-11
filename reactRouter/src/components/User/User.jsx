
import { useParams } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
function User() {
    const {userId} = useParams()
    const data = useLoaderData()

  return (
    <div className="bg-gray-400 text-3xl text-white  p-4 text-center m-10">User : {userId} followers : {data.followers} </div>
  )
}

export default User

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sahil1919')

    return response.json()
}