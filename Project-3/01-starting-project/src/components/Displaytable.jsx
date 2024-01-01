import React from 'react';
import {CalculateInvestmentResults,formatter} from '../util/investment';
function Displaytable({data}) {
   const tableData=CalculateInvestmentResults(data);
  //  console.log(tableData);
  return (
    <>
    {!tableData&&<h1 className='center'>Data Not avalible</h1>}
     <table id="result">
        <thead id="result thead">
        <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        </tr>
        </thead>
        <tbody id="result tbody">
          {tableData.map((tdata)=>{ 
          return <>
          <tr>
          <td key={tdata.year} >{formatter.format(tdata.year)}</td>
          <td key={tdata.interest}>{formatter.format(tdata.interest)}</td>
          <td key={tdata.valueEndOfYear}>{formatter.format(tdata.valueEndOfYear)}</td>
          <td key={tdata.annualInvestment}>{formatter.format(tdata.annualInvestment)}</td>
          </tr>
            </>
          })}
        </tbody>
     </table>
    </>
  )
}

export default Displaytable
