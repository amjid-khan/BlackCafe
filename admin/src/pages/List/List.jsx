import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios"
import {toast} from "react-toastify"
const List = ({url}) => {
  const [list, setList] = useState([])
  //Fetching Data From DataBase 
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error(response.data.message)
    }
  }
  //Fecthing Data In useEffect
  useEffect(() => {
    fetchList()
  }, [])
  //Remove FoodItem 
  const removeFood = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: id })
    await fetchList()
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }
   return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/uploads/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <button onClick={()=>removeFood(item._id)} className='remove-btn'>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
