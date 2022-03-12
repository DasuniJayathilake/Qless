import React from 'react';

export default function searchBar() {
  return (
    <div>

        <div class="form-outline mb-4">
            <input type="search" class="form-control" id="datatable-search-input"/>
            <label class="form-label" for="datatable-search-input">Search</label>
        </div>

        <div id="datatable">
        </div>
        
    </div>
  )
}
