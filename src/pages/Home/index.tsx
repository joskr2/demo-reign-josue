import Dropdown from "../../components/Dropdown"
import Header from "../../components/Header"
import Toggle from "../../components/Toggle"
import { items } from "../../data/data"
import CardsGrid from "../../views/CardGrid"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Toggle defaultOnAll={false} />
        <Dropdown title={'Select your news'} items={items} />
        <CardsGrid articles={[
          {
            id: 1,
            timeAndAuthor: '1 hour ago by John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url: 'https://www.google.com'
          },
          {
            id: 2,
            timeAndAuthor: '1 hour ago by John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url: 'https://www.google.com'
          },
          {
            id: 3,
            timeAndAuthor: '1 hour ago by John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            url: 'https://www.google.com'
          }
        ]} />

      </main>
    </>
  )
}

export default Home