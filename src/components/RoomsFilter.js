import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// get all unique values
const getUnique = (item, value) => {
    return [...new Set(item.map(item => item[value]))];
}



export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    // get capacity
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className='form-control'
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input
                        type="range"
                        name='price'
                        min={minPrice}
                        max={maxPrice}
                        id='price'
                        value={price}
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input
                        type="number"
                        name="minSize"
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className='size-input'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input
                        type="number"
                        name="maxSize"
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className='size-input'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                    />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="form-group">
                    <input
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                    />
                    <label htmlFor="pets">pets</label>
                </div>

            </form>
        </section>
    )
}
