// rrd imports
import { useLoaderData } from "react-router-dom";

//  helper functions
import { fetchData } from "../helpers"
import Intro from "../components/Intro";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro />}
      Dashboard
    </>
  )
}
export default Dashboard