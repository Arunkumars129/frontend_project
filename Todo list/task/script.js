var courseObj = ["HTML5","CSS3","Javascript","Bootstrap","Jquary","Angular","React.js","Vue.js"];

function getCourse(){
    
    let courses = document.getElementById("Courses")

    let str = "";

    for( let item of courseObj){
        str = str + "<li>" + item + "</li>"
        courses.innerHTML = str
    }


}
function addData(){
    let courseName = document.getElementById("CourseName").value;
    if (courseObj.includes(courseName)){
        alert("course is alraedy exist")
        return;
    }
    courseObj.push(courseName.value);
    getCourse();
}

function removeData(){
    let courseName = document.getElementById("CourseName")
    let index = courseObj.indexOf( courseName.value );
    if(index !== -1){
        courseObj.splice(index,1);  
        getCourse();
    }else{
        alert("course is not found")
    }
}