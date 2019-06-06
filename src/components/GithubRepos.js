import React from 'react';

class GithubRepos extends React.Component{

  render(){
  return(
    <div className="container">
      <div className="card mb-3" >
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src="..." className="card-img" alt='...'/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Repo Name</h5>
              <p className="card-text">Repos Description</p>
              <p className="card-text">stars :<small className="text-muted"> 11</small> 
              | Issues :<small>0</small> | Submitted 30 days ago by RecaN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
}

export default GithubRepos;