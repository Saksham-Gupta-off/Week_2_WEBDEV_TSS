import React from "react";

const Subscribe = () => (
    <form class="">
  <div class="row mb-3">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputAddress" class="col-sm-2 col-form-label">Hostel No.</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputAddress" />
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
);

export default Subscribe;