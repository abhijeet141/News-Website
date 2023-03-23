import NewsList from './NewsList'

function NewsGrid({items}) {
  return (
    <div className='news-grid'>
        {items.map((item, i) => (
            <NewsList key={i} item={item}/>
        ))}
    </div>
  )
}

export default NewsGrid