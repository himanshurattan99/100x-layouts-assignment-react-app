import BackButton from '../../buttons/BackButton'
import NextButton from '../../buttons/NextButton'

export default function CreateAccountStep3() {
    return (
        <>
            <main className="px-[0.94rem] pb-5 min-h-screen flex flex-col gap-3">
                <section className="py-3 flex items-center gap-5">
                    {/* Back Button */}
                    <BackButton />
                    <p className="text-neutral-50 text-sm-2 font-bold">Step 3 of 4</p>
                </section>
                <section className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-neutral-50 text-2xl font-bold">We sent you a code</h2>
                        <p className="text-neutral-500 text-sm">Enter it below to verify janedoe@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <form className="flex flex-col gap-8">
                            {/* Enter Verification Code */}
                            <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                                <input type="text" placeholder="Verification Code" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                                <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                    Verification Code
                                </div>
                            </div>
                        </form>
                        {/* Send Verification Code Again */}
                        <div className="text-end">
                            <p className="text-blue-default text-sm">Didn't receive a code?</p>
                        </div>
                    </div>
                </section>
                <section className="flex-grow flex items-end">
                    {/* Next Button */}
                    <NextButton />
                </section>
            </main>
        </>
    )
}