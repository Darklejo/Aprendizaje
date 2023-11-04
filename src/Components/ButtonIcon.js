function SectionAddTodo(){
    return(
        <>
            <button className="button">
                <p className="button-text" style={{fontSize: "20px"}}>Añade un nuevo ToDo</p>
                <img
                src="https://www.reshot.com/preview-assets/icons/ME3P9S8WHB/plus-ME3P9S8WHB.svg"
                className="button-svg" 
                alt="Add Item"
                style={{width: "20px"}}/>
            </button>

            <section className="info-todo">
                <form className="form">
                    <div className="form-group">
                        <label for="nameTodo">Agrega un nombre a tu tarea</label>
                        <input className="name-todo input" id="nameTodo" type="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="timeTodo">Agrega una hora</label>
                        <input className="time-todo input" id="timeTodo" type="time" required/>
                    </div>
                    <div className="form-group">
                        <label for="deascriptionTodo">Agrega una descripción</label>
                        <textarea 
                        className="description-todo input" 
                        id="descriptionTodo" 
                        style={{padding:"12px"}}
                        required></textarea>
                    </div>
                    <button 
                    className="buttonSend button"
                    style={{fontSize: "20px", marginTop:"20px"}}>
                        <p>Añadir</p>
                    </button>
                </form>
            </section>
        </>
    )
}

export {SectionAddTodo};