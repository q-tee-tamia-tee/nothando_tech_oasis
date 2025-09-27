const button = document.getElementById('aboutButton');
const textElement = document.getElementById('aboutText');

SITE_ID = "https://github.com/q-tee-tamia-tee/nothando_tech_oasis"
STUDNET_NUM = "1111"
button.addEventListener('click', function () {
    // Toggle the 'hidden' class on the text element
    textElement.classList.toggle('hidden');

    // Optional: Change button text to reflect the current state
});

const g10_button = document.getElementById('g10_button');
const g10_text = document.getElementById('g10_text')
g10_button.addEventListener('click', async function () {
    // Toggle the 'hidden' class on the text element
    await test()
    g10_text.classList.toggle('hidden');
    comments.forEach(comment => {
        const node = document.createElement("p");
        const textnode = document.createTextNode(comment);
        node.appendChild(textnode)
        node.classList.add('card-comment')
        g10_text.appendChild(node)
        console.log(node)
    });
    // Optional: Change button text to reflect the current state
});

const g11_button = document.getElementById('g11_button');
const g11_text = document.getElementById('g11_text')
g11_button.addEventListener('click', function () {
    // Toggle the 'hidden' class on the text element
    g11_text.classList.toggle('hidden');

    // Optional: Change button text to reflect the current state
});

const g12_button = document.getElementById('g12_button');
const g12_text = document.getElementById('g12_text')
g12_button.addEventListener('click', function () {
    // Toggle the 'hidden' class on the text element
    g12_text.classList.toggle('hidden');

    // Optional: Change button text to reflect the current state
});
let comments = []
async function test() {

    local_comments = await getComments(STUDNET_NUM, SITE_ID)
    console.log(comments)
    local_comments.forEach(comment => {
        sender = comment['sender'] + ':'
        text = comment['text']
        comments.push(sender + ' ' + text)
    });
    console.log(comments, comments.length)
}

g10_comment.addEventListener('click', async function () {
    const inputElement = document.getElementById('g10_input');
    const inputValue = inputElement.value;
    // console.log(inputValue)
    await postComment(STUDNET_NUM, SITE_ID, inputValue, "Noluthando")
    await test()
})

