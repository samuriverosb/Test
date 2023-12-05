const newChatWidget = document.createElement("div");
newChatWidget.innerHTML = `
<div id="MSLiveChatWidget">
<style>
  .hideButton {
    display: none;
  }

  .showChat {
    display: none;
  }

  .oclcw-chatbutton {
    width: 140px;
    height: 46.5px;
    border-radius: 100px;
    position: relative;
    pointer-events: none;
    -moz-box-shadow: 0 0 4px rgba(102, 102, 102, .5);
    -webkit-box-shadow: 0 0 4px rgba(102, 102, 102, .5);
    box-shadow: 0 0 4px rgba(102, 102, 102, .5)
  }

  .oclcw-chatbutton-title {
    margin-left: 0
  }

  .oclcw-chatbutton {
    display: flex;
    min-width: 180px;
    height: 60px;
    border-radius: 100px;
    position: relative;
    background-color: #fff;
    border: 1px solid #fff;
    -moz-box-shadow: 0 0 4px rgba(102, 102, 102, .5);
    -webkit-box-shadow: 0 0 4px rgba(102, 102, 102, .5);
    box-shadow: 0 0 4px rgba(102, 102, 102, .5);
    margin: 3px
  }

  .oclcw-chatbutton:hover,
  .loading-screen:hover {
    background-color: #f8f8f8
  }

  .oclcw-chatbutton:active,
  .loading-screen:active {
    background-color: #f4f4f4
  }

  .oclcw-chatbutton-title {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 14px;
    font-family: "Segoe UI", Arial, sans-serif;
    min-width: 85px;
    max-width: 105px
  }

  .oc-autofill .oclcw-chaticon-container {
    width: 62px;
    height: 62px;
    background-color: #007bff;
    border-radius: 50%;
    border: 1px solid transparent;
    margin: -2px 0 -2px -3px;
    position: relative
  }

  .inApp .oclcw-chaticon-container {
    width: 46.5px;
    height: 46.5px;
    border-radius: 50%;
    border: 1px solid transparent;
    margin: -1px 0 -2px -3px
  }

  .oclcw-chaticon-container {
    width: 62px;
    height: 62px;
    background-color: #007bff;
    border-radius: 50%;
    border: 1px solid transparent;
    margin: -2px -2px -2px -3px;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .oclcw-chatbutton-title {
    margin-left: 0
  }

  .oclcw-chatbutton-title {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 14px;
    font-family: "Segoe UI", Arial, sans-serif;
    min-width: 85px;
    max-width: 105px
  }

  .oclcw-chatbutton-title {
    margin-right: 14px
  }

  .inApp .oclcw-t1 {
    font-weight: normal;
    color: #fff
  }

  .oclcw-t1 {
    font-size: 16px;
    color: #262626;
    font-weight: bold;
    line-height: 19px;
    height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis !important
  }

  .inApp .oclcw-t2 {
    display: none
  }

  .oclcw-t2 {
    font-size: 12px;
    color: #666;
    height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis !important
  }

  .web-chat {
    height: 500px;
    width: 395px;
    box-shadow: 0px 0px 5px black;
  }

  h1 {
    font-size: 16px;
    font-family: Segoe UI;
    line-height: 20px;
    color: whitesmoke;
    display: table-cell;
    padding: 13px 0px 0px 20px;
}

#heading {
    background-color: #065577;
    height: 50px;
}

  #webchatcanvas {
    width: 100%; 
    height: 90%; 
    background-color: white;
  }

  @media (max-width: 470px) {
    #MSLiveChatWidgetChat {
      width: 100%;
    }
  
    #chatRootReact {
      width: 100%;
      left: 0;
      right: 0;
    }
  
    #chat {
      width: 100%;
    }

    #webchatcanvas {
      height: 97%;
    }
  
    #chatPlaceholderWrapper {
      width: 100%;
    }
  
    #web-chat-root {
      width: 100%;
    }
  
    .web-chat {
      width: 100%;
      margin: 0;
    }
  
    .oclcw-actionBar-active-header-active {
      width: 100%;
      margin: 0;
    }
  }
</style>


<div id="MSLiveChatWidgetButton">
  <div class="chat-root-react" id="chatRootReact" dir="ltr">
    <div id="chat">
      <div id="oclw-chat" class="chat-button" style="position: fixed; bottom: 30px; cursor: pointer; right: 30px;">
        <div class="oclcw-chatbutton" id="oclcw-chatButton" role="button" tabindex="0">
          <div class="oclcw-chaticon-container" style="background-color: rgb(0, 129, 138);"><img
              class="oclcw-chaticon" alt=""
              src="https://oc-cdn-ocprod.azureedge.net/livechatwidget/images/chat.svg">
          </div>
          <div class="oclcw-chatbutton-title">
            <div class="oclcw-t1" aria-label="Need Help" title="Need Help">Need Help</div>
            <div class="oclcw-t2" aria-label="Chat with us!" title="Chat with us!">Chat with us!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="MSLiveChatWidgetChat" class="showChat">
  <div class="chat-root-react" id="chatRootReact" dir="ltr"
    style="display: block; position: fixed; bottom: 30px; right: 30px;">
    <div id="chat" style="position: relative;">
      <div id="minimize"
        style="color: white; position: absolute; top: 0px; right: 40px; z-index: 999; cursor: pointer; font-weight: bolder; font-size: 1.5rem; font-family: Segoe UI;">
        _</div>
      <div id="close"
        style="color: white; position: absolute; top: 0px; right: 15px; z-index: 999; cursor: pointer; font-weight: lighter; font-size: 1.7rem; font-family: Segoe UI;">
        x</div>
      <div id="chatPlaceholderWrapper">
        <article class="web-chat oclcw-actionBar-active-header-active" id="web-chat-root">
          <div id="heading">
            <!-- Change the h1 text to change the bot name -->    
            <h1>BYU-Pathway Student Guide</h1>
          </div>
          <div id="webchatcanvas" role="main"></div>
        </article>
      </div>
    </div>
  </div>
</div>
</div>
`;

document.body.append(newChatWidget);

const existingChatWidget = document.getElementById("MSLiveChatWidget");


const button = document.querySelector('#MSLiveChatWidgetButton');
const chat = document.querySelector('#MSLiveChatWidgetChat');
const minimizeButton = document.querySelector('#minimize');
const closeButton = document.querySelector('#close');

button.addEventListener('click', () => {
  button.classList.toggle('hideButton')
  chat.classList.toggle('showChat')
})

minimizeButton.addEventListener('click', () => {
  button.classList.toggle('hideButton')
  chat.classList.toggle('showChat')
})

closeButton.addEventListener('click', () => {
  button.classList.toggle('hideButton')
  chat.classList.toggle('showChat')
})



// Replace 'YOUR_BOT_ID' and 'YOUR_SECRET' with your actual bot ID and secret
const botId = '54454900-684f-4546-a79a-82f0e0550b6b';
const directLineSecret = 'bg3nlI1n9ls.AwJdPX7rPbv1KE5XsUs5hxcKFo_LHPbYUMae5rOGjfM';

// Check if the WebChat object is defined
if (window.WebChat) {
  // Create a Direct Line connection
  const directLine = window.WebChat.createDirectLine({ secret: directLineSecret });

  const styleOptions = {
    // Hide upload button.
    hideUploadButton: false,
    autoScrollSnapOnPage: true,
  };

  // Start the conversation
  directLine.postActivity({
      from: { id: 'user1' },
      name: 'startConversation',
      type: 'event',
      value: { trigger: 'automatic' }
  }).subscribe(
      id => console.log(`Posted activity`),
      error => console.log(`Error posting activity ${error}`)
  );

  // Render the Web Chat
  window.WebChat.renderWebChat({
      directLine: directLine,
      userID: 'user1',
      botAvatarInitials: 'Bot',
      userAvatarInitials: 'You',
      styleOptions
  }, document.getElementById('webchatcanvas'));
} else {
  console.error('Web Chat SDK not loaded');
}

document.querySelector('.webchat__send-box .webchat__send-box__main').style.display = "none";


// EVENT LISTENER TO CHECK FOR FEEL FREE TO USE
document.addEventListener('DOMContentLoaded', function () {
  // Function to log the latest node with the desired content
  function logLatestNode(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const latestNode = mutation.target.lastElementChild;
        if (latestNode && containsDesiredContent(latestNode)) {
          document.querySelector('.webchat__send-box .webchat__send-box__main').style.display = "flex";
        }
      }
    }
  }

  // Options for the Mutation Observer
  const options = {
    childList: true,
    subtree: true,
  };

  // Create a Mutation Observer
  const observer = new MutationObserver(logLatestNode);

  // Target the div with the id "webchatcanvas"
  const webchatcanvasElement = document.getElementById('webchatcanvas');

  // Observe changes in the div
  observer.observe(webchatcanvasElement, options);

  // Helper function to check if a node contains the desired content
  function containsDesiredContent(node) {
    const pElement = node.querySelector('.webchat__basic-transcript__activity-body .webchat__stacked-layout__content .webchat__stacked-layout__message-row .webchat__stacked-layout__message .webchat__bubble__content div p');
    return pElement && pElement.textContent.trim() === 'Feel free to use the “Type your message” option below to ask your question in one sentence. I’ll be happy to help you with whatever you need!';
  }
});


// EVENT LISTENER TO CHECK FOR USER TO CLICK LOG IN
document.addEventListener('DOMContentLoaded', function () {
  // Function to log the latest node with the desired content
  function logLatestNode(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const latestNode = mutation.target.lastElementChild;
        if (latestNode && containsDesiredContent(latestNode)) {
          const loginButton = latestNode.querySelector('button');
          if (loginButton.getAttribute('title') === 'Log in') {
            console.log(loginButton)
            loginButton.addEventListener('click', () => {
              document.querySelector('.webchat__send-box .webchat__send-box__main').style.display = "flex";
          })
          }
          
        }
      }
    }
  }

  // Options for the Mutation Observer
  const options = {
    childList: true,
    subtree: true,
  };

  // Create a Mutation Observer
  const observer = new MutationObserver(logLatestNode);

  // Target the div with the id "webchatcanvas"
  const webchatcanvasElement = document.getElementById('webchatcanvas');

  // Observe changes in the div
  observer.observe(webchatcanvasElement, options);

  // Helper function to check if a node contains the desired content
  function containsDesiredContent(node) {
    const pElement = node.querySelector('button div');
    return pElement && pElement.textContent.trim() === 'Log in';
  }
});


// EVENT LISTENER TO CHECK FOR TRY REPHRASING
document.addEventListener('DOMContentLoaded', function () {
  // Function to log the latest node with the desired content
  function logLatestNode(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const latestNode = mutation.target.lastElementChild;
        if (latestNode && containsDesiredContent(latestNode)) {
          document.querySelector('.webchat__send-box .webchat__send-box__main').style.display = "flex";
        }
      }
    }
  }

  // Options for the Mutation Observer
  const options = {
    childList: true,
    subtree: true,
  };

  // Create a Mutation Observer
  const observer = new MutationObserver(logLatestNode);

  // Target the div with the id "webchatcanvas"
  const webchatcanvasElement = document.getElementById('webchatcanvas');

  // Observe changes in the div
  observer.observe(webchatcanvasElement, options);

  // Helper function to check if a node contains the desired content
  function containsDesiredContent(node) {
    const pElement = node.querySelector('.webchat__basic-transcript__activity-body .webchat__stacked-layout__content .webchat__stacked-layout__message-row .webchat__stacked-layout__message .webchat__bubble__content div p');
    return pElement && pElement.textContent.trim() === 'I’m sorry, I’m not sure how to help with that. Can you try rephrasing?';
  }
});


// EVENT LISTENER TO CHECK FOR USER INPUT
document.addEventListener('DOMContentLoaded', function () {
  // Function to log the latest node with the desired content
  function logLatestNode(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const latestNode = mutation.target.lastElementChild;
        if (latestNode && containsDesiredContent(latestNode) && latestNode.parentNode.tagName !== 'DIV') {
          document.querySelector('.webchat__send-box .webchat__send-box__main').style.display = "none";
        }
      }
    }
  }

  // Options for the Mutation Observer
  const options = {
    childList: true,
    subtree: true,
  };

  // Create a Mutation Observer
  const observer = new MutationObserver(logLatestNode);

  // Target the div with the id "webchatcanvas"
  const webchatcanvasElement = document.getElementById('webchatcanvas');

  // Observe changes in the div
  observer.observe(webchatcanvasElement, options);

  // Helper function to check if a node contains the desired content
  function containsDesiredContent(node) {
    const pElement = node.querySelector('.webchat__basic-transcript__activity .webchat__bubble--from-user .webchat__bubble__content');
    return pElement;
  }
});


