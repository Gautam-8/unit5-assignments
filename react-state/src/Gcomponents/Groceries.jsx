import "./Groceries.css"

export const Groceries = ({title , id , i , removeItem}) => {

    const handleClick = () => {
        removeItem(id)
    }

    return <>
    
    <div className="title" > {i+1}. <i className="fix">{title}</i>
    
    <button onClick={handleClick} className="remove">remove</button>

    </div>
    
    
    </>
}