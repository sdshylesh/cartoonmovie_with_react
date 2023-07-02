const Allanime=({a})=>{
    console.log(a);
    return(
        
            <div className="all" >
              <div className="navbar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand"  id="home">HOME</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <span class="nav-link active" aria-current="page"  id="share">Share</span>
        </li>
        <li class="nav-item">
          <span class="nav-link"  id="buy">Buy</span>
        </li>
        <li class="nav-item">
          <span class="nav-link"  id="view">View Movie</span>
        </li>
      
        <li class="nav-item">
          <span class="nav-link disabled" id="edit">Edit </span>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>
<div className="animedetail">
            {
                a.map((anime) =>{
                    return(
                      
                        <div  >
                        <div class="col">
                          <div class="card">
                            <img src={anime.images.jpg.image_url} class="card-img-top" alt="..." height="300px"></img>
                            <div class="card-body">
                              <h5 class="card-title">Title : {anime.title}</h5>
                              <p class="card-text">Duration : {anime.duration}</p>
                              <p class="card-text">Year: {anime.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    )
                })
            }
             </div>
            

          
        </div>

    )
}
export default Allanime;