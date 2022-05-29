import { FC } from 'react';
import Card from '../../components/Card';
import { IArticleList } from '../../interfaces/IArticle';
import './style.css';

const CardsGrid: FC<IArticleList> = ({ articles }) => {
  return (
    <div className='card-container'>
      {articles.map((article, index) => {
        return <Card key={index} id={article.id} timeAndAuthor={article.timeAndAuthor} description={article.description} url={article.url} />
      })}
    </div>
  )
}

export default CardsGrid