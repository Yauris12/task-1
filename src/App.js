import logo from './logo.svg'
import './App.css'
import ContactList from './components/container/ContactList'
import ContactForm from './components/container/forms/ContactForm'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <ContactList />
        </div>
      </header>
    </div>
  )
}

export default App
