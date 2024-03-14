import React from 'react'
import './dashboard.scss'
export default function Dashboard() {

    const name = "name";
  return (
    <div>
        <div className="menubar">
            <div className='name'>
                <h1>Welcome</h1>
                <h3>{name}</h3>
            </div>
            <ul>
                <li><button>Home</button></li>
                <li><button>History</button></li>
                <li><button>Create Order</button></li>
                <li><button>Update Inventory</button></li>
                <li><button>View Order</button></li>
                <li><button>View Inventory</button></li>
                <li><button>Log-out</button></li>
            </ul>
        </div>
    </div>
  )
}
