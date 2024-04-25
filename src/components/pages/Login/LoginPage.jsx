import CreateAccountButton from '../../buttons/CreateAccountButton'
import SignInButton from '../../buttons/SignInButton'

export default function LoginPage() {
    return (
        <>
            <main className="min-h-screen flex items-center">
                <section className="px-7 w-full flex flex-col gap-10">
                    <div className="text-neutral-50 flex flex-col gap-3">
                        <h2 className="text-[1.94rem] font-extrabold">Happening now</h2>
                        <h3 className="font-medium">Join today</h3>
                    </div>
                    <CreateAccountButton />
                    <div className="text-neutral-50 flex items-center gap-1">
                        <div className="bg-neutral-700 w-full h-[0.0625rem]" />
                        <p>or</p>
                        <div className="bg-neutral-700 w-full h-[0.0625rem]" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-neutral-50 text-sm-2">Already have an account?</p>
                        <SignInButton />
                    </div>
                </section>
            </main>
        </>
    )
}