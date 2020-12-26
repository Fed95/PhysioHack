import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from "react-router-dom";

import { fetchUsers } from '../redux/formSlice'

const Home = () => {
    const [address, setAddress] = useState('')
    const [searchRequestStatus, setSearchRequestStatus] = useState('idle')

    const dispatch = useDispatch()
    const history = useHistory();
    const onAddressChanged = (e) => setAddress(e.target.value)

    const canSave = [address].every(Boolean) && searchRequestStatus === 'idle'

    const onSearchClicked = async () => {
        if (canSave) {
            try {
                setSearchRequestStatus('pending');
                dispatch(fetchUsers());
                setAddress('');
                history.push("/results");
            } catch (err) {
                console.error('Failed to search: ', err);
            } finally {
                setSearchRequestStatus('idle');
            }
        }
    }

    return (
        <section>
            <h2>Search</h2>
            <form>
                <label htmlFor="postTitle">Address:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="Insert your address"
                    value={address}
                    onChange={onAddressChanged}
                />
                <button type="button" onClick={onSearchClicked} disabled={!canSave}>
                    Search
                </button>
            </form>
        </section>
    )
}

export default Home;