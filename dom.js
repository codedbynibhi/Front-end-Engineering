// there are 12 types of nodes in dom,the document one is called document node and html one is called elemnt node and like the content we pass is calledtext node.
//to manage local or browser storage we use bom etc.
// const pid = document.getElementById("text");
// console.log(pid);
//query selctorall give nodelist ;can be accese using index;
// (function(){
//     const todos =[];
// const p = document.getElementsByClassName("todo");
// P.style.color ="pink";
// P.style.backgroundColor ="blue";
// const todocont = document.getElementById("todo");
// const inputtask = document.createElement("input");
// inputtask.placeholder ="enter task.... "
// inputtask.type ="text";
// const addbtn = document.createElement("button");
// addbtn.textContent ='Add';
// todocont.append(inputtask,addbtn);
// function addtodo(){
//     const task = inputtask.value;
//     todos.unshift(task);
//     rendertask();

// }
// addbtn.addEventListener("click")
// })();

(function () {
const todos = [];
const todocont = document.getElementById("todo");
const inputtask = document.createElement("input");
inputtask.placeholder = "Enter task...";
inputtask.type = "text";
 const addbtn = document.createElement("button");
 addbtn.textContent = "Add";
const todolist = document.createElement("div");
todocont.append(inputtask, addbtn, todolist);
function rendertask() {
 todolist.innerHTML = "";
 todos.forEach(function (task, index) {
 const div = document.createElement("div");
 const p = document.createElement("p");
 p.style.color ="pink";
p.style.backgroundColor ="blue";
 p.textContent = task;
const delbtn = document.createElement("button");
delbtn.textContent = "Delete";
delbtn.addEventListener("click", function () {
  todos.splice(index, 1);
     rendertask();
            });

            div.append(p, delbtn);
            todolist.append(div);

        });

    }

    function addtodo() {
 const task = inputtask.value.trim();
if (!task) {
            return;
        }todos.unshift(task);

        rendertask();

        inputtask.value = "";
        inputtask.focus();
    }

    addbtn.addEventListener("click", addtodo);

})();