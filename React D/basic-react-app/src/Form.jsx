function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted")
}

export default function From() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text"  placeholder="write something"/>
            <button >Submit</button>
        </form>
    )
} 