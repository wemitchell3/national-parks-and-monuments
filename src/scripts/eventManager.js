const handleDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks());
};

const handleVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks());
};

const handleEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);

  console.log(editedParkName.value, editedParkState.value);

  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value
  };

  putPark(parkId, editedPark).then(() => listNationalParks());
};
