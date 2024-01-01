function Calculatorinputs({setInputValues,uservalue}) {
  return (
    <>
    <section id='user-input'>
        <div className='input-group'>
          <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number"  required  placeholder=" " value={uservalue.initialInvestment} onChange={(event)=>setInputValues('initialInvestment',event.target.value)}/>
          </p>
          <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number"  required  placeholder=" "value={uservalue.annualInvestment} onChange={(event)=>setInputValues('annualInvestment',event.target.value)}/>  
          </p>
          <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required  placeholder=" "value={uservalue.expectedReturn} onChange={(event)=>setInputValues('expectedReturn',event.target.value)}/>
          </p>
          <p>
          <label>DURATION</label>
          <input type="number" required placeholder=" " value={uservalue.duration} onChange={(event)=>setInputValues('duration',event.target.value)}/>
          </p>  
        </div>
    </section>
    </>
  )
}

export default Calculatorinputs
