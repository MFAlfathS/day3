var dataProject = [];

function addProject() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let image = document.getElementById('input-image').value;

    if (tittle == ""){
        return alert("please entered your title")
    } else if (content == "") {
        return alert("please entered your content")
    } else if (image == "") {
        return alert("please entered your image")
    }

    dataProject.push({
        title: title,
        content: content,
        image: image,
    })
    console.log(dataProject);
}