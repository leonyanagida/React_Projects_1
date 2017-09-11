import React from 'react';
import giphy from '../images/giphy.png';

const GifsListItem = ({ gif }) => {
  // const gif = props.gif;
  const gifWebp = gif.images.fixed_width.webp;
  const gifOriginal = gif.images.original.url;
  const id = `#${gif.id}`;
  const gifLink = gif.url;
  console.log(id);
  console.log(gif);

  return (
    <li>
      <a data-toggle="modal" data-target={ id }>
        <img src={ gifWebp } alt="gif" />
      </a>
      <div id={ gif.id } className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Find more Gifs!
              </h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <img className="img-responsive" src={ gifOriginal } alt="gif" />
              <div className="links">
                <a href={ gifLink } target="_blank" rel="noopener noreferrer">
                  <img src={ giphy } className="logo" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GifsListItem;
