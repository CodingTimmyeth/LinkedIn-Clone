import styled from "styled-components"

const Leftside = (props) => {
  return (
    <Container>
        <ArtCard>card</ArtCard>
    </Container>
  )
}

const Container = styled.div`
    grid-area: leftside;
`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    backround-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
`

export default Leftside