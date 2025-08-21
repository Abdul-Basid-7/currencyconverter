

function UnControlComp(){

            const handleSubmit = (event) => {
                event.preventDefault();

                const dataValue =  document.querySelector('#inputName').value;
                console.log(dataValue);
            }



  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-50">
        <h1>UnControlled Component</h1>
        <form 
        className="bg-white p-6 rounded-2xl shadow w-80 flex flex-col gap-3"
        onSubmit={handleSubmit}>
            <label>
                Name:
                <input
               placeholder="Enter name"
                className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id='inputName'
                type="text" 
                name="name" />
            </label>
            <br />
            <button
            className="state-button bg-indigo-600 text-white rounded-xl py-2 hover:bg-indigo-700"
             type='submit' 
             >
                Submit
            </button>
        </form>
    </div>
  )
}
export default UnControlComp