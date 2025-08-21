import { useState } from 'react';


function ControlComp(){

    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitted Name: ${name}`);
    };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
<form
onSubmit={handleSubmit}
className="bg-white p-6 rounded-2xl shadow w-80 flex flex-col gap-3"
>
<h2 className="text-lg font-semibold text-center">Controlled Component</h2>
<input
type="text"
placeholder="Enter your name"
className="border rounded-xl px-3 py-2 outline-none focus:ring-indigo-500"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<button
type="submit"
className="bg-indigo-600 text-white rounded-xl py-2 hover:bg-indigo-700"
>
Submit
</button>
</form>
    </div>
  )
}
export default ControlComp