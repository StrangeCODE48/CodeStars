import React from "react";
import TeamTamplate from '../components/TeamTamplate'

const Team = (
  {chairperson,viceChairpersons,technicals,events,creatives,marketings,publicitys,editorials}) => {
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
        <h2 className="team-name">Technical</h2>
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
        <h2 className="team-name">Event</h2>    
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
      <h2 className="team-name">Creatives</h2>
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
      <h2 className="team-name">Marketing</h2>
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
      <h2 className="team-name">publicity</h2>
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
      <h2 className="team-name">Editorial</h2>
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
  );
};

export default Team;
