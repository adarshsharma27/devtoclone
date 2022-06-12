import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaGlobe, FaRegTimesCircle } from "react-icons/fa";
const UserDetails = ({ UserDetail, hide }) => {
    return (
        <>
            <div className="modal show fade" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.08)" }} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {UserDetail.profile_image_90 && <img src={UserDetail.profile_image_90} className="profile-image" alt={UserDetail.username} loading="lazy" />}
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                {UserDetail.username}
                            </h5>
                            <FaRegTimesCircle type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hide} />
                        </div>
                        <div className="modal-body">
                            <p>{UserDetail.name}</p>
                            {UserDetail.github_username && (
                                <p className="d-flex align-items-center">
                                    {" "}
                                    <FaGithubSquare />
                                    <span className="px-1">{UserDetail.github_username}</span>
                                </p>
                            )}
                            {UserDetail.twitter_username && (
                                <p className="d-flex align-items-center">
                                    {" "}
                                    <FaTwitterSquare />
                                    <span className="px-1">{UserDetail.twitter_username}</span>
                                </p>
                            )}
                            {UserDetail.website_url && (
                                <a className="d-flex align-items-center" href={UserDetail.website_url} target="_blank" rel="noreferrer">
                                    {" "}
                                    <FaGlobe />
                                    <span className="px-1">{UserDetail.website_url}</span>
                                </a>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
