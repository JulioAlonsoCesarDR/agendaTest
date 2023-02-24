import FormUser  from './components/FormUser'
import ListUser from './components/ListUser'

function App() {
  return (
    <div className="container mx-auto mt-20">
      <div className="mt-12 md:flex">
        <FormUser/>
        <ListUser/>
      </div>
    </div>
  )
}

export default App
