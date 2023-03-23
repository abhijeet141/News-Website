function NewsList({item}) {
    return(
      <a href={item.url} className="article">
          <div className="article-image">
              <img src={item.urlToImage} alt={item.title}/>
          </div>
          <div className="article-content">
          <div>
              <span>{item.source.name}</span>
          </div>
          <div className="article-title">
              <h2>{item.title}</h2>
          </div>
          <p className="article-description">{item.description}</p>
          </div>
      </a>
    )
  }
  export default NewsList