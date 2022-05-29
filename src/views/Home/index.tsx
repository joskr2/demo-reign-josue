import Card from "../../components/Card"
import Dropdown from "../../components/Dropdown"
import Header from "../../components/Header"
import Toggle from "../../components/Toggle"
import { items } from "../../data/data"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Toggle defaultOnAll={false} />
        <Dropdown title={'Select your news'} items={items}/>

        <Card/>

      </main>
    </>
  )
}

export default Home