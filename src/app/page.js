"use client"
import { Container } from 'react-bootstrap'
import Dashbord from '@/Components/dashbord'
import Aside from '@/Components/aside'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import CityData from '@/data/city'



export default function Home() {
  const router = useRouter();
  const [cookies] = useCookies()
  useEffect(() => {
    console.log(cookies?.auth)
    if (!cookies?.auth) {
      router.push('/sign-in');
    }
  }, [cookies?.auth, router])

  return (
    <>
      <div className="main">
        <Aside />
        <main>
          <Container>
            <Dashbord data={CityData} />
          </Container>
        </main>
      </div>
    </>
  )
}
