import { useEffect, useState } from 'react'
import letters from './letters'

export default function App() {

  const [contacts, setContacts] = useState<string[]>([])
  const [filteredContacts, setFilteredContacts] = useState<string[]>(contacts)
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const matchingContacts: string[] = contacts.filter(contact =>
      contact.toLowerCase().startsWith(search.toLowerCase())
    ) 
    setFilteredContacts(matchingContacts)
  }, [search, contacts])

  function addContact() {
    let contactName: string = "";
    for (let i=0; i < 5; i++) {
      let letter = letters[Math.floor(Math.random() * 26)]
      if (i === 0) letter = letter.toUpperCase()
      contactName += letter
    }
    const newContacts = [...contacts, contactName]
    setContacts(newContacts.sort())
  }

  return (
    <div>
      <h1>Contacts App - Beamafilm Internship Challenge</h1>
      <h2>Joseph Kokkat</h2>
      <label htmlFor="filter">Search Contacts</label>
      <input type="text" id="filter" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={addContact}>Add New Contact</button>
      <ul>
        {filteredContacts.map(contact =>
          <li>{contact}</li>
        )}
      </ul>
    </div>
  )
}
