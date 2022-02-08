const workouts = [
  {
    name: 'Plate Thrusters',
    image: './img/plate-thrusters.jpg',
    reps: 15,
    sets: 3,
    mins: null,
  },
  {
    name: 'Mountain Climbers',
    image: './img/mountain-climbers.png',
    reps: 20,
    sets: 3,
    mins: null,
  },
  {
    name: 'Box Jumps',
    image: './img/box-jumps.jpg',
    reps: 10,
    sets: 3,
    mins: null,
  },
  {
    name: 'Walk Outs',
    image: './img/walkouts.jpg',
    reps: 10,
    sets: 3,
    mins: null,
  },
  {
    name: 'Renegade Rows',
    image: './img/renegade-rows.jpg',
    reps: 10,
    sets: 3,
    mins: null,
  },
  {
    name: 'Press Ups',
    image: './img/press-ups.jpg',
    reps: 15,
    sets: 3,
    mins: null,
  },
  {
    name: 'Incline Treadmill',
    image: './img/incline-treadmill.jpg',
    reps: 1,
    sets: 1,
    mins: 10,
  },
  {
    name: 'Supermans',
    image: './img/supermans.jpg',
    reps: 10,
    sets: 3,
    mins: null,
  },
  {
    name: 'Crunches',
    image: './img/crunches.jpg',
    reps: 10,
    sets: 3,
    mins: null,
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const workoutList = document.getElementById('workoutList')

  workouts.map((workout) => {
    const newListItem = document.createElement('li')
    let activityMethod = ''
    if (workout.mins !== null) {
      activityMethod = `${workout.mins} minutes ${workout.reps} times`
    } else {
      activityMethod = `${workout.sets} sets of ${workout.reps}`
    }
    newListItem.innerHTML = `<input type="checkbox" /><div class="image-container"><img src=${workout.image} /></div><div class="workout-details-container">
    <h2>${workout.name}</h2>
    <p>${activityMethod}</p>
  </div>`
    workoutList.appendChild(newListItem)
  })
})
