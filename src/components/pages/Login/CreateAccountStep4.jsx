import BackButton from '../../buttons/BackButton'

export default function CreateAccountStep4() {
    return (
        <>
            <main className="px-[0.94rem] pb-5 min-h-screen flex flex-col gap-3">
                <section className="py-3 flex items-center gap-5">
                    {/* Back Button */}
                    <BackButton />
                    <p className="text-neutral-50 text-sm-2 font-bold">Step 4 of 4</p>
                </section>
                <section className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-neutral-50 text-2xl font-bold">You'll need a password</h2>
                        <p className="text-neutral-500 text-sm">Make sure it's 8 characters or more</p>
                    </div>
                    <form className="flex flex-col gap-8">
                        {/* Create Password */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="password" placeholder="Password" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Password
                            </div>
                            <img src="../../public/images/visible-T.svg" alt="Visibility Icon" className />
                        </div>
                    </form>
                </section>
                <section className="flex-grow flex items-end">
                    {/* Next Button */}
                    <a href="../home-feed/index.html" className="w-full">
                        <button className="bg-neutral-500 py-3 px-6 w-full rounded-1.88 shadow-sh-1 backdrop-blur-xl">
                            <p className="text-neutral-1000 font-bold">
                                Next
                            </p>
                        </button>
                    </a>
                </section>
            </main>
        </>
    )
}