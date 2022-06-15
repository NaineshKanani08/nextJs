import { useRouter } from 'next/router'

const index = () => {
    const router= useRouter()
    const {meetupid}=router.query
  return (
    <div>{meetupid}</div>
  )
}

export default index