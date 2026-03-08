import { useActionState } from "react"
async function submitAction(prevState, formData) {
  const name = formData.get("name")

  if (!name) {
    return { message: "Name is required" }
  }

  return { message: `Hello ${name}` }
}
export default function MyForm() {

  const [state, formAction, isPending] = useActionState(
    submitAction,
    { message: "" }
  )

  return (
    <form action={formAction}>
      
      <input type="text" name="name" placeholder="Enter name" />

      <button disabled={isPending}>
        Submit
      </button>

      <p>{state.message}</p>

    </form>
  )
}