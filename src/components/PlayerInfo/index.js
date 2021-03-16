import React from 'react';
import moment from 'moment';
import './PlayerInfo.css';

const PlayerInfo = (props) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={`player-images/${props.player.Id}.jpg`} className="card-img-top" alt="Player Image" />
                <div className="card-body">
                    <h5 className="card-title">{props.player.PFName}</h5>
                    <h6 className="card-subtitle">{props.player.SkillDesc}</h6>
                    <p style={{ color: 'white', fontSize: '12px', marginBottom: '5px', marginTop: '1.5rem' }}>Player's Value</p>
                    <h5 style={{ color: 'green', marginTop: 0, marginBottom: '1rem', }}>$ {props.player.Value}</h5>
                    {props.player.UpComingMatchesList[0].TLoc !== null ? (
                        <div>
                            <h4 className="upcoming-matches-heading">Upcoming Matches</h4>
                            {props.player.UpComingMatchesList.map(match => (
                                <div style={{ marginBottom: '10px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p className="mb-1" style={{ color: 'white' }}>{match.CCode}</p>
                                        <p className="mb-1" style={{ color: 'rgb(236, 105, 70)' }}>v/s</p>
                                        <p className="mb-1" style={{ color: 'white' }}>{match.VsCCode}</p>
                                    </div>
                                    <p style={{ color: 'rgb(236, 105, 70)', fontSize: '15px', textAlign: 'center' }}>
                                        {moment(moment.utc(match.MDate)).local().format('DD-MM-YYYY h:mm:ss a')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : <h4 className="upcoming-matches-heading">No Upcoming Matches</h4>}
                </div>
            </div>
        </div>
    );
}

export default PlayerInfo;