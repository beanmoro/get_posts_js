
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postDataElement = document.querySelector('#post-data');


const requestPosts = async() => {

    try {
        
        const response = await fetch(apiUrl);

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }

    
}

const getPosts = async()=>{

    const posts = await requestPosts();
    
    let list = '';

    posts.forEach(d => {
        list+= `<li>
                    <p><b>${d.title}</b><br>
                    ${d.body}</p>
                </li>`
    });

    postDataElement.innerHTML = `<ul>
                                    ${list}
                                </ul>`;

}