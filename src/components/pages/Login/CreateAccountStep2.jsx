import BackButton from '../../buttons/BackButton'

export default function CreateAccountStep2() {
    return (
        <>
            <main className="px-[0.94rem] pb-5 min-h-screen flex flex-col gap-3">
                <section className="py-3 flex items-center gap-5">
                    {/* Back Button */}
                    <BackButton />
                    <p className="text-neutral-50 text-sm-2 font-bold">Step 2 of 4</p>
                </section>
                <section className="flex flex-col gap-5">
                    <h2 className="text-neutral-50 text-2xl font-bold">Create your account</h2>
                    <form className="flex flex-col gap-8">
                        {/* Name */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="text" placeholder="Name" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Name
                            </div>
                            <img src="../../public/images/correct.svg" alt="Correct Icon" className="hidden" />
                        </div>
                        {/* Email */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="text" placeholder="Email" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Email
                            </div>
                            <img src="../../public/images/correct.svg" alt="Correct Icon" className="hidden" />
                        </div>
                        {/* Date of Birth */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="text" placeholder="Date of birth" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Date of Birth
                            </div>
                            <img src="../../public/images/correct.svg" alt="Correct Icon" className="hidden" />
                        </div>
                    </form>
                </section>
                <section className="flex-grow flex items-end">
                    {/* Sign Up Button */}
                    <a href="./create-account-step-3.html" className="w-full">
                        <button className="bg-blue-default hover:bg-blue-hover p-5 w-full rounded-625 shadow-sh-1 backdrop-blur-xl">
                            <p className="text-neutral-50 font-bold">
                                Sign Up
                            </p>
                        </button>
                    </a>
                </section>
            </main>
        </>
    )
}