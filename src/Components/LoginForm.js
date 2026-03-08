import { useActionState } from "react"

async function loginAction(prevState, formData) {
  const email = formData.get("email")
  const password = formData.get("password")

  if (email === "admin@gmail.com" && password === "1234") {
    return { message: "Login Success", success: true }
  }

  return { message: "Invalid Credentials", success: false }
}

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    { message: "" }
  )

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back</h1>
            <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-5">

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="admin@gmail.com"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                           transition duration-200"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500
                           rounded-lg px-4 py-2.5 text-sm
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                           transition duration-200"
              />
            </div>

            {/* Submit Button */}
            <button
              disabled={pending}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800
                         disabled:cursor-not-allowed text-white font-semibold
                         rounded-lg py-2.5 text-sm mt-2
                         transition duration-200 flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </>
              ) : "Sign In"}
            </button>

            {/* Status Message */}
            {state.message && (
              <div className={`rounded-lg px-4 py-3 text-sm font-medium text-center
                ${state.success
                  ? "bg-emerald-900/50 text-emerald-400 border border-emerald-800"
                  : "bg-red-900/50 text-red-400 border border-red-800"
                }`}>
                {state.message}
              </div>
            )}

          </form>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          Hint: admin@gmail.com / 1234
        </p>
      </div>
    </div>
  )
}