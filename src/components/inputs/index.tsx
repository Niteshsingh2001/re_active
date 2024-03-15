import "./style.css"

export default function CustomInputs() {
  return (
    <form className="flex flex-col  gap-2 bg-image w-full h-full px-5 py-5">
      <div className=" flex flex-col h-96 w-1/2">
        <input type="text " />

        <input type="checkbox" />
        <button >Button</button>
      </div>


    </form>
  )
}
