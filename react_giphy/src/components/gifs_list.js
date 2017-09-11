import React from 'react';
import GifsListItem from './gifs_list_item';

const GifsList = (props) => {
  // const data = props.data;
  console.log(props.data)
  const gifItems = props.data.map((gif) => {
    return <GifsListItem
      // Every list item must have key
      key={ gif.id }
      gif={ gif }
    />
  });

  if (gifItems.length < 1) {
    return (
      <div>
        <div className="loading"><i className="fa fa-spinner fa-4x" /></div>
        <div className="empty">Taking too long?<br/>Try searching something else!</div>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <div className="container">
        <ul id="myContent">
          { gifItems }
        </ul>
      </div>
    </div>
  );
};

export default GifsList;
