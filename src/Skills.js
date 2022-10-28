import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
  const HTMLvalue = 0.75;
  const CSSvalue= 0.70;
  const BOOTSTRAPvalue = 0.80;
  const JSvalue = 0.70;
  const Reactvalue = 0.75;
  const Reduxvalue = 0.75;
  const MYSQLvalue = 0.70;
  const NODEvalue = 0.65;
  return (
    <div className='container skills ' id='skills' style={{paddingTop:"8%"}}>
      <h1>My Skills</h1>

      
     <div className="row skill_row" style={{paddingTop:"5%"}}>
      <div class="col-md-3 progressBar">
      <div><CircularProgressbar value={HTMLvalue} maxValue={1} text={`${HTMLvalue * 100}%`}
      
      
      /></div>
      <span className='text' >HTML</span>
      </div>
      <div class="col-md-3 progressBar">
        
      <CircularProgressbar value={CSSvalue}  initialAnimation={true} color="inherit" maxValue={1} text={`${CSSvalue * 100}%`} />
      <span className='text'>CSS</span>

      </div>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={BOOTSTRAPvalue} maxValue={1} text={`${BOOTSTRAPvalue * 100}%`} />
      <span className='text'>BOOTSTRAP</span>

      </div>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={JSvalue} maxValue={1} text={`${JSvalue * 100}%`} />
      <span className='text'>JAVASCRIPT</span>

      </div>

     </div>
     <div className="row skill_row" style={{paddingTop:"5%",paddingBottom:"6%"}}>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={Reactvalue} maxValue={1} text={`${Reactvalue * 100}%`} />
      
      <span className='text'>ReactJS</span>
      </div>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={Reduxvalue} maxValue={1} text={`${Reduxvalue * 100}%`} />
      <span className='text'>REDUX</span>

      </div>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={MYSQLvalue} maxValue={1} text={`${MYSQLvalue * 100}%`} />
      <span className='text'>MYSQL</span>

      </div>
      <div class="col-md-3 progressBar">
      <CircularProgressbar value={NODEvalue} maxValue={1} text={`${NODEvalue * 100}%`} />
      <span className='text'>NODEJS</span>

      </div>

     </div>
     </div>
  )
}

export default Skills