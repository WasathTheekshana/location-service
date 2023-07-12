import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Loading from './Loading'
import Error from './Error'

const Notfound = () => {
  return (
    <Container>
        <div>
        <Logo 
          firstWord="Location"
          secondWord="Service."
        />
        <Loading />
        <Error
          heading="URL not found or Internal Server Error!"
          description="Please check the correct URL or try again later."
        />
      </div>
    </Container>
  )
}

export default Notfound