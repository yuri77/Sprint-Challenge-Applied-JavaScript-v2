// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {
    console.log("data:", data);
    const tabTopics = document.querySelector(".topics");
    const topics = data.data.topics;
    topics.forEach(topic => {
      const eachTopic = createTab(topic);
      tabTopics.appendChild(eachTopic);
    });
  })
  .catch(error => {
    console.log("The API is currently down: ", error);
  });

function createTab(topic) {
  const topicElement = document.createElement("div");
  topicElement.classList.add("tab");
  topicElement.textContent = topic;

  return topicElement;
}
