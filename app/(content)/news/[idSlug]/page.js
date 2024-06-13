import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function Id ({params}){
    const newsSlug = params.idSlug;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

    if(!newsItem){
        notFound()
    }

    return(
        <article className="news-article">
            <header>
              <Link href={`/news/${newsItem.slug}/image`}> <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/></Link> 
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}