import React from 'react'
import background from '../assets/background.gif'

const Home = () => {
  return (
    <>
      {/* <div className='vh-100 bg-gif-custom'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="row">
                  <div className="col-3">
                    <img className='rounded-circle w-100' src="https://avatars.githubusercontent.com/u/80125848?v=4" alt="" srcset="" />
                  </div>
                  <div className="col-9">
                    <div className='text-light'>
                      <h1>.DotH3</h1>
                      <p>Never Gonna give u up</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-content-center'>
        </div>
      </div> */}
      <div className="bg-secondary vh-100">
        <div className="d-flex h-100 align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mx-auto bg-primary">
                <div className="row">
                  <div className="col-md-3 col-6 mx-md-0 mx-auto">
                    <img className='rounded-circle w-100' src="https://avatars.githubusercontent.com/u/80125848?v=4" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home