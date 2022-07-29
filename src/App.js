import logo from './logo.svg'
import './App.css'
import ContactList from './components/container/ContactList'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <ContactList />
        </p>
      </header>
    </div>
  )
}

export default App
