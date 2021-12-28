export const TodoItem = ({title ,status , id ,getremove}) => {

    const handleremove = () =>{
        //console.log(title)
        getremove(id)
            
    }

    return(
        <>
            <div><i>
                {title} - {status ? "Done" :"Not Done"}
                </i>
             <button onClick={handleremove}> remove</button>
                </div>
        </>
    )
}