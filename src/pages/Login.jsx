export default function Login() {
    return (
        <>
            <main className="min-h-screen flex items-center">
                <section className="px-7 w-full flex flex-col gap-10">
                    <div className="text-neutral-50 flex flex-col gap-3">
                        <h2 className="text-[1.94rem] font-extrabold">Happening now</h2>
                        <h3 className="font-medium">Join today</h3>
                    </div>
                    {/* Create Account Button */}
                    <a href="./create-account-step-1.html">
                        <button className="bg-neutral-50 hover:bg-neutral-200 py-2 px-6 w-full rounded-4.06 shadow-sh-1 backdrop-blur-xl">
                            <p className="text-neutral-1000 font-bold">
                                Create Account
                            </p>
                        </button>
                    </a>
                    <div className="text-neutral-50 flex items-center gap-1">
                        <div className="bg-neutral-700 w-full h-[0.0625rem]" />
                        <p>or</p>
                        <div className="bg-neutral-700 w-full h-[0.0625rem]" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-neutral-50 text-sm-2">Already have an account?</p>
                        {/* Sign In Button */}
                        <a href="../home-feed/index.html">
                            <button className="py-2 px-6 w-full border border-stroke rounded-4.06 shadow-sh-1 backdrop-blur-xl">
                                <p className="text-blue-default font-bold">
                                    Sign In
                                </p>
                            </button>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}