import React from 'react'

const NewsItem = ({ title, description, src, url }) => {
  return (

    <>
      {/* <div className="card bg-dark w-95 text-light mb-3 d-inline-block mx-5 my-5 px-2 py-2">
        <img src={src} style={{ height: "250px", width: "350px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>


      </div> */}

      <div className="card" style={{ width: "20rem" }} >
        <img src={src} className="card-img-top h-100px"/>
        <div className="card-body">
          <h3 className="card-title text-danger">{title}</h3>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary mt-3">Readmore</a>
        </div>
      </div>

    </>

  )
}

export default NewsItem
