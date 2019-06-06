import React from 'react';

class GithubRepos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      repos: [],
      isLoaded: false,
      page: 1
    }
  }

  componentDidMount = () =>{
    var date = new Date();
    date.setDate(date.getDate() - 30);
    var dateString = date.toISOString().split('T')[0];
    
    fetch ('https://api.github.com/search/repositories?q=created:>'+dateString+'&sort=stars&order=desc')
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        repos: json.items,
        total_count: json.total_count
      });
    })
    window.scrollTo(0, 0)
  }

  render(){
    var { isLoaded, repos, total_count } = this.state;
    if (!isLoaded){
      return <h1> Loading Data ...</h1>;
    }else{
      return(
        <div className="container">
          <h1>Total Github Repos: {total_count} </h1>
          {repos.map(item =>(
          <div className="card mb-3" key={item.id}>
            <div className="row no-gutters">
              <div className="col-md-2">
                <img src={item.owner.avatar_url} className="card-img" alt={item.owner.login}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.full_name}</h5>
                  <p className="card-text">{ item.description }</p>
                  <p className="card-text">stars :<small className="text-muted">{ item.stargazers_count}</small> 
                  | Issues :<small>{item.open_issues}</small> | Submitted 30 days ago by {item.owner.login}
                  </p>
                </div>
              </div>
            </div>
          </div>
          ))}
          <div className="row">
            <div className="col-sm">
              <button className="btn btn-dark" > Previous page </button>
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm">
              <button className="btn btn-dark" > Next page </button>
            </div>
          </div>
        </div>
        )
    }
  }
}

export default GithubRepos;