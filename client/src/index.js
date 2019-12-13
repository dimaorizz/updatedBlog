function genPost(post){
    return ``
}

class Api{
    // data is a post content
    static post(data){
        return fetch('/posts', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(res => res.json());
    }
    static get(){
        return fetch('/posts', {method: 'get'}).then(res => res.json());
    }
}

function createPost(){
    const author = document.getElementById('author').value,
          title = document.getElementById('title').value,
          description = document.getElementById('description').value,
          text = document.getElementById('text').value;

    Api.post({
        author,
        title,
        description,
        text,
    });

}