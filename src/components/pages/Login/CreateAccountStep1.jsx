import BackButton from '../../buttons/BackButton'

export default function CreateAccountStep1() {
    return (
        <>
            <main className="px-[0.94rem] pb-5 min-h-screen flex flex-col gap-3">
                <section className="py-3 flex items-center gap-5">
                    {/* Back Button */}
                    <BackButton />
                    <p className="text-neutral-50 text-sm-2 font-bold">Step 1 of 4</p>
                </section>
                <section className="flex flex-col gap-5">
                    <h2 className="text-neutral-50 text-2xl font-bold">Create your account</h2>
                    <form className="flex flex-col gap-8">
                        {/* Enter Name */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="text" placeholder="Name" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Name
                            </div>
                        </div>
                        {/* Enter Email Address */}
                        <div className="py-4 px-3 border border-neutral-500 rounded focus-within:border-blue-default relative flex justify between">
                            <input type="text" placeholder="Email" className="peer bg-transparent w-full
                          outline-none text-neutral-50 text-xl placeholder:text-neutral-500" required />
                            <div className="bg-neutral-1000 px-1 text-neutral-500 peer-focus:text-blue-default text-xs font-medium absolute -top-2.5 left-3.5">
                                Email
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-neutral-50 text-sm-2 font-bold">Date of Birth</p>
                            <p className="text-secondary text-sm text-justify">This will not be shown publicly. Confirm your own
                                age, even if this account is for a business, a pet, or something else.</p>
                        </div>
                        {/* Enter Date of Birth */}
                        <div className="flex gap-3">
                            {/* Month */}
                            <fieldset className="pt-2 pb-4 px-3 w-full border border-neutral-500 rounded focus-within:border-blue-default">
                                <legend className="px-1 text-neutral-500 text-xs font-medium">
                                    Month
                                </legend>
                                <select className="bg-neutral-1000 w-full text-neutral-50 focus:outline-none">
                                    <option value className="hidden" />
                                    <option value="Januaury">Januaury </option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </fieldset>
                            {/* Day */}
                            <fieldset className="pt-2 pb-4 px-3 w-full border border-neutral-500 rounded focus-within:border-blue-default">
                                <legend className="px-1 text-neutral-500 text-xs font-medium">
                                    Day
                                </legend>
                                <select className="bg-neutral-1000 w-full text-neutral-50 focus:outline-none">
                                    <option value className="hidden" />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                    <option value={24}>24</option>
                                    <option value={25}>25</option>
                                    <option value={26}>26</option>
                                    <option value={27}>27</option>
                                    <option value={28}>28</option>
                                    <option value={29}>29</option>
                                    <option value={30}>30</option>
                                    <option value={31}>31</option>
                                </select>
                            </fieldset>
                            {/* Year */}
                            <fieldset className="pt-2 pb-4 px-3 w-full border border-neutral-500 rounded focus-within:border-blue-default">
                                <legend className="px-1 text-neutral-500 text-xs font-medium">
                                    Year
                                </legend>
                                <select className="bg-neutral-1000 w-full text-neutral-50 focus:outline-none">
                                    <option value className="hidden" />
                                    <option value={2023}>2023</option>
                                    <option value={2022}>2022</option>
                                    <option value={2021}>2021</option>
                                    <option value={2020}>2020</option>
                                    <option value={2019}>2019</option>
                                    <option value={2018}>2018</option>
                                    <option value={2017}>2017</option>
                                    <option value={2016}>2016</option>
                                    <option value={2015}>2015</option>
                                    <option value={2014}>2014</option>
                                    <option value={2013}>2013</option>
                                    <option value={2012}>2012</option>
                                    <option value={2011}>2011</option>
                                    <option value={2010}>2010</option>
                                    <option value={2009}>2009</option>
                                    <option value={2008}>2008</option>
                                    <option value={2007}>2007</option>
                                    <option value={2006}>2006</option>
                                    <option value={2005}>2005</option>
                                    <option value={2004}>2004</option>
                                    <option value={2003}>2003</option>
                                    <option value={2002}>2002</option>
                                    <option value={2001}>2001</option>
                                    <option value={2000}>2000</option>
                                    <option value={1999}>1999</option>
                                    <option value={1998}>1998</option>
                                    <option value={1997}>1997</option>
                                    <option value={1996}>1996</option>
                                    <option value={1995}>1995</option>
                                    <option value={1994}>1994</option>
                                    <option value={1993}>1993</option>
                                    <option value={1992}>1992</option>
                                    <option value={1991}>1991</option>
                                    <option value={1990}>1990</option>
                                    <option value={2023}>2023</option>
                                    <option value={2022}>2022</option>
                                    <option value={2021}>2021</option>
                                    <option value={2020}>2020</option>
                                    <option value={2019}>2019</option>
                                    <option value={2018}>2018</option>
                                    <option value={2017}>2017</option>
                                    <option value={2016}>2016</option>
                                    <option value={2015}>2015</option>
                                    <option value={2014}>2014</option>
                                    <option value={2013}>2013</option>
                                    <option value={2012}>2012</option>
                                    <option value={2011}>2011</option>
                                    <option value={2010}>2010</option>
                                    <option value={2009}>2009</option>
                                    <option value={2008}>2008</option>
                                    <option value={2007}>2007</option>
                                    <option value={2006}>2006</option>
                                    <option value={2005}>2005</option>
                                    <option value={2004}>2004</option>
                                    <option value={2003}>2003</option>
                                    <option value={2002}>2002</option>
                                    <option value={2001}>2001</option>
                                    <option value={2000}>2000</option>
                                    <option value={1999}>1999</option>
                                    <option value={1998}>1998</option>
                                    <option value={1997}>1997</option>
                                    <option value={1996}>1996</option>
                                    <option value={1995}>1995</option>
                                    <option value={1994}>1994</option>
                                    <option value={1993}>1993</option>
                                    <option value={1992}>1992</option>
                                    <option value={1991}>1991</option>
                                    <option value={1990}>1990</option>
                                    <option value={1989}>1989</option>
                                    <option value={1988}>1988</option>
                                    <option value={1987}>1987</option>
                                    <option value={1986}>1986</option>
                                    <option value={1985}>1985</option>
                                    <option value={1984}>1984</option>
                                    <option value={1983}>1983</option>
                                    <option value={1982}>1982</option>
                                    <option value={1981}>1981</option>
                                    <option value={1980}>1980</option>
                                </select>
                            </fieldset>
                        </div>
                    </form>
                </section>
                <section className="px-5 flex-grow flex items-end">
                    {/* Create Account Button */}
                    <a href="./create-account-step-2.html" className="w-full">
                        <button className="bg-neutral-500 py-2 px-6 w-full rounded-4.06 shadow-sh-1 backdrop-blur-xl">
                            <p className="text-neutral-1000 font-bold">
                                Create Account
                            </p>
                        </button>
                    </a>
                </section>
            </main>
        </>
    )
}