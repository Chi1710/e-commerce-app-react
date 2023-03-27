import React from 'react'
import {Link} from "react-router-dom"
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img 
            src="https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/1">
            Sale
            </Link>
        </button>
        </div>
        <div className="row">
        <img 
            src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/2">
            Women
            </Link>
        </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
        <img 
            src="https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/3">
            Just In
            </Link>
        </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img 
            src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/4">
            Men
            </Link>
        </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img 
            src="https://images.pexels.com/photos/1760699/pexels-photo-1760699.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/5">
            Accessories
            </Link>
        </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img 
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=''
          />
        <button>
          <Link className="link" to="/products/6">
            Shoes
            </Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Categories