function renderProfile(user, car) 
{
  document.getElementById('profileCard').innerHTML = `
    <div class="card-title">👤 profile summary</div>
    <div class="profile-field"><strong>name:</strong> <span>${user.name}</span></div>
    <div class="profile-field"><strong>email:</strong> <span>${user.email}</span></div>
    <div class="profile-field"><strong>phone:</strong> <span>${user.phone}</span></div>
    <button class="btn btn-blue" style="margin-top:18px">edit profile</button>
  `;

  document.getElementById('carCard').innerHTML = `
    <div class="card-title">🚗 my car</div>
    <div class="profile-field"><strong>brand:</strong> <span>${car.brand}</span></div>
    <div class="profile-field"><strong>model:</strong> <span>${car.model}</span></div>
    <div class="profile-field"><strong>year:</strong> <span>${car.year}</span></div>
    <div class="profile-field"><strong>license plate:</strong> <span>${car.licensePlate}</span></div>
    <button class="btn btn-blue" style="margin-top:18px">edit car info</button>
  `;
}

renderProfile(CAR_DATA.user, CAR_DATA.car);
