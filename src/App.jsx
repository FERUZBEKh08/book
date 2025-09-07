import book from "./book/Elektron resrurs.pdf"
import "./App.css"
export default function App() {
  return (
    <div className="main">
      <iframe className="book" src={book}></iframe>
    </div>
  )
}
