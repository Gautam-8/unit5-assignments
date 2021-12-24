import "./todo.css"

function Todo({num , children}) {
    return <h1 className="headings" ><i className="redcolor">Todo:</i> watch - {num} {children}</h1>
  }

  export default Todo