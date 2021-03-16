import React from 'react';
import './Header.css';
import Network from '../../config/Network';

const Header = (props) => {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container" style={{ padding: '0px' }}>
                    <a className="navbar-brand" href={Network.url}>Player Viewer</a>
                    <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={props.onSubmit}>
                      <div class="input-group">
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Search for Players, Teams..." 
                                aria-label="Search for Players, Teams..." 
                                aria-describedby="button-addon2"
                                onChange={props.onChange} 
                            />
                            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                                <i className="fa fa-search"></i>
                                &nbsp;&nbsp;Search
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
    );
}

export default Header;