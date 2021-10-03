import React from 'react';

import './../sass/views/Artist.scss';

import FollowButton from './FollowButton.jsx';
import UnfollowButton from './UnfollowButton.jsx';

export default function Artist({
  artistId,
  artistName,
  artistBio,
  artistImageURL,
  artistIsOnTour,
  isFollowed,
  addArtist,
  removeArtist
}) {
  return (
    <article className="artist-item">
      <header>
        <img src={artistImageURL} alt={`Event image for ${artistName}`}></img>
      </header>
      <div className='artist-body'>
        <h2>{artistName}</h2>
        <p>{artistBio}</p>
      </div>
      <div className='artist-footer'>
        <div className='artist-on-tour'>
          <p>On Tour? {artistIsOnTour ? 'Yes' : 'No'}</p>
        </div>
        {isFollowed && <UnfollowButton onClick={addArtist(artistId)} />}
        {!isFollowed && <FollowButton onClick={removeArtist(artistId)} />}
      </div>
    </article>
  );
}
