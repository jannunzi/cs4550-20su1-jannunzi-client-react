export const findWidgetsForTopic = (tid) =>
  fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
    .then(response => response.json())
