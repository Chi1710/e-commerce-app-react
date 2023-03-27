import React from 'react'
import {Link} from "react-router-dom"
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img 
            src="https://images.pexels.com/photos/11588269/pexels-photo-11588269.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            src="https://images.pexels.com/photos/14148345/pexels-photo-14148345.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            src="https://images.pexels.com/photos/2351858/pexels-photo-2351858.jpeg?auto=compress&cs=tinysrgb&w=600"
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