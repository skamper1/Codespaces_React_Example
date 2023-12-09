import { useState, useRef } from 'react'

function App() {
  // initial state of both the input text box and the items list
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState(["task1", "task2"])
  // reference for auto focusing in text box
  const inputRef = useRef()

  // function to add item
  const add = () => {
    setItems([...items, inputText])
    setInputText("")
    inputRef.current.focus(); // refocus
  }
  // function to remove an item from the list
  const remove = (index) => {
    console.log(`removing item in index ${index}`)
    items.splice(index, 1)
    setItems([...items])
  }

  // the HTML on the page with the 
  return (
    <div className="w3-container">
      <h1>Todo List</h1>
      <input type="text" value={inputText} ref={inputRef} autoFocus onChange={(evt) => setInputText(evt.target.value)} ></input>
      <button onClick={add}>Add</button>
      <table className="w3-table-all">
        <thead>
          <tr>
            <th>
              Task
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td><button onClick={() => { remove(index) }}>X</button></td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>

    </div>
  )
}

export default App
