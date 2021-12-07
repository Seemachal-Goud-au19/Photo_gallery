import React, { useState, useEffect } from "react";
import Photo from "./PhotoComponent";

export const PhotoContainer = () => {
  const [albumname, setAlbumname] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getAlbum_Name = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await response.json();
    setAlbumname(data);
  };

  const getPhoto = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await response.json();
    //console.log(data)
    setPhoto(data);
  };

  useEffect(() => {
    getAlbum_Name();
    getPhoto();
  }, []);

  let ShowPhoto = (val) => {
    setToggle(true);
    if (val == 0) {
      setPhoto([]);
    } else {
      let start = Number((val - 1) * 50);
      let end = Number(val * 50);

      let newphoto = photo.slice(start, end);
      setPhoto(newphoto);
      console.log(newphoto);
      console.log(start);
    }
  };

  return (
    <div className="photo_gallery">
      <select name="album">
        <option value="0" onClick={(e) => ShowPhoto(e.target.value)}>
          --Please choose an option--
        </option>
        {albumname.map((album) => (
          <option onClick={(e) => ShowPhoto(e.target.value)} value={album.id}>
            {album.title}
          </option>
        ))}
      </select>

      <div className="photo_container">
        {toggle &&
          photo.map((photodetail) => {
            const { id, thumbnailUrl, title } = photodetail;
            return <Photo id={id} thumbnailUrl={thumbnailUrl} title={title} />;
          })}
      </div>
    </div>
  );
};
