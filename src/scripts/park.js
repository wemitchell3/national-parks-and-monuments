const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude))

  editFormFragment.appendChild(buildElement("label", undefined, "longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude))

  //Visted park or no radio buttons
  const visitedRadioFormFragment = buildElement("form", `edit-park-visited--${parkObject.id}`)
  visitedRadioFormFragment.appendChild(buildElement("label", undefined, "Visted?"))

  const visitedYes = buildElement("input", undefined, undefined, "true")
  visitedYes.type = "radio"
  visitedYes.name = "visited"
  visitedRadioFormFragment.appendChild(visitedYes)
  visitedRadioFormFragment.appendChild(buildElement("label", undefined, "Yes", "true"))

  const visitedNo = buildElement("input", undefined, undefined, "false")
  visitedNo.type = "radio"
  visitedNo.name = "visited"
  visitedRadioFormFragment.appendChild(visitedNo)
  visitedRadioFormFragment.appendChild(buildElement("label", undefined, "No", "false"))

  if (parkObject.visited === true) {
    visitedYes.checked = true
  } else {
    visitedNo.checked = true
  }

  editFormFragment.appendChild(visitedRadioFormFragment)

  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)
  console.log(updateParkButton)

  return editFormFragment
}
