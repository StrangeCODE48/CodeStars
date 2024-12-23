import React from 'react'
import TeamTamplate from '../components/TeamTamplate'


const Teamone = ({chairperson,viceChairpersons,technicals,events,creatives,marketings,publicitys,editorials}) => {
  return (
    <section id="Team">
      <h1 className="teams-title">Our Core</h1>

      <div className="team chairperson" style={{}}>
      <div className="team-member">
      <TeamTamplate teammember=
      {chairperson}/>
      </div>
      </div>

      <div className="team vice-chairpersons">
        <div className="team-member">
        {viceChairpersons.map((viceChairperson) => {
          return(
            <TeamTamplate teammember=
            {viceChairperson}/>
          )
        })}
        </div>  
      </div>

     <div className="team technical-heads">
        <div className="team-member">
        {technicals.map((technical) => {
          return(
            <TeamTamplate teammember=
            {technical}/>
          )
        })}
        </div>
      </div>

      <div className="team events-head">    
        <div className="team-member">
        {events.map((event) => {
          return(
            <TeamTamplate teammember=
            {event}/>
          )
        })}
        </div>
      </div>

      <div className="team creatives-heads">
        <div className="team-member">
        {creatives.map((creative) => {
          return(
            <TeamTamplate teammember=
            {creative}/>
          )
        })}
        </div>
      </div>

      <div className="team marketing-heads">
        <div className="team-member">
        {marketings.map((marketing) => {
          return(
            <TeamTamplate teammember=
            {marketing}/>
          )
        })}
        </div>
        </div>

      <div className="team publicity-heads">
        <div className="team-member">
        {publicitys.map((publicity) => {
          return(
            <TeamTamplate teammember=
            {publicity}/>
          )
        })}
        </div>
      </div>

      <div className="team editorial-heads">
        <div className="team-member">
        {editorials.map((editorial) => {
          return(
            <TeamTamplate teammember=
            {editorial}/>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default Teamone
