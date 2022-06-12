import React, { useState } from "react";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import UserDetails from "./UserDetails";
const Cards = ({ user, cover_image, title, description, tag_list, created_at, url, setTags, comments_count, public_reactions_count }) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <div className="row">
                <div className="col-xl-7 col-md-7 col-sm-12 mx-auto">
                    <div className="product-card text-left">
                        {/* <img className="img-responsive" src={image} alt={label} /> */}
                        <div className="product-image-caption">
                            {cover_image && <img src={cover_image} className="img-fluid" alt={title} loading="lazy" />}
                            <div className="product-image-txt">
                                <div className="profile-image-card py-2">
                                    {user.profile_image_90 && (
                                        <img
                                            src={user.profile_image_90}
                                            className="profile-image"
                                            alt={title}
                                            loading="lazy"
                                            onClick={() => {
                                                setModal(true);
                                            }}
                                        />
                                    )}
                                </div>
                                <h3>{title}</h3>
                                <h4 className="decription-1">By {user.username}</h4>
                                <p className="decription-2">{DOMPurify.sanitize(description, { USE_PROFILES: { html: false } })}</p>
                                <p className="decription-2">
                                    {tag_list.map((element, index) => {
                                        return (
                                            <span
                                                className="tags  me-2"
                                                key={index}
                                                onClick={(e) => {
                                                    setTags(element);
                                                    window.scroll(0, 0);
                                                }}
                                            >
                                                #{element}
                                            </span>
                                        );
                                    })}
                                </p>
                                <h6 className="decription-3">{format(new Date(created_at), "dd/MM/YYY")}</h6>
                                <a href={url} target="_blank" rel="noreferrer">
                                    Read More
                                </a>
                                <div className="views d-flex py-2 mt-2">
                                    <p className="decription-2 pe-2 mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="as7g9lt3eli3f68fxr1bk3vy1kbuogap" class="crayons-icon">
                                            <title id="as7g9lt3eli3f68fxr1bk3vy1kbuogap">Comments</title>
                                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                                        </svg>
                                        {comments_count} comments
                                    </p>
                                    <p className="decription-2 mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9n7ktygh0o1lbw8bh75cmmvqu2jzp40" class="crayons-icon">
                                            <title id="a9n7ktygh0o1lbw8bh75cmmvqu2jzp40">Reactions</title>
                                            <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                                        </svg>
                                        {public_reactions_count} reactions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {modal && (
                    <UserDetails
                        UserDetail={user}
                        hide={() => {
                            setModal(false);
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default Cards;
