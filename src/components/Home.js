import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Pagination from "./Pagination";
const Home = () => {
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);
    const [perPage] = useState(5);
    const [tag, setTags] = useState("discuss");

    useEffect(() => {
        const setArticles = async () => {
            const ApiUrl1 = `https://dev.to/api/articles?per_page=${perPage}&page=${page}&tag=${tag}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setInfo(data);
        };
        setArticles();
    }, [page, tag]); // eslint-disable-line

    return (
        <>
            {info && <Pagination info={info} setPage={setPage} page={page} />}
            <div className="content bg-light">
                <div className="container py-4">
                    {info === null ? (
                        <Loader />
                    ) : (
                        info.map((element, index) => {
                            let { cover_image, user, title, description, tag_list, created_at, url, comments_count, public_reactions_count } = element;
                            return (
                                <Cards
                                    key={index}
                                    user={user}
                                    cover_image={cover_image}
                                    title={title}
                                    tag_list={tag_list}
                                    description={description}
                                    created_at={created_at}
                                    url={url}
                                    setTags={setTags}
                                    comments_count={comments_count}
                                    public_reactions_count={public_reactions_count}
                                />
                            );
                        })
                    )}
                </div>
            </div>
            {info && <Pagination info={info} setPage={setPage} page={page} />}
        </>
    );
};

export default Home;
