
import useSWR from 'swr'
const dashboardSWR = () => {
    const fetcher=async()=>{
        const result = await fetch("http://localhost:4000/dashboard")
        const data = await result.json()
        return data
    }
    const { data,error } = useSWR('dashboard', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <div>
        <h2>Dashboard</h2>
        <h4>Post:{data.posts}</h4>
        <h4>likes:{data.likes}</h4>
        <h4>followers:{data.followers}</h4>
        <h4>following:{data.following}</h4>

    </div>
  )
}

export default dashboardSWR