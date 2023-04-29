const addBtn = document.querySelector("#addBtn");
const main = document.getElementById("main");

function saveNotes(){
	const notes = document.querySelectorAll(".note textarea");
	const data = [];
	notes.forEach((note)=>{
		data.push(note.value);
	})
}

addBtn .addEventListener("click", function(){
	addNote();
})

function addNote(){
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `<div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea></textarea> `;       
    note.querySelector(".trash").addEventListener("click", function(){
    	note.remove();
    });
    note.querySelector(".save").addEventListener("click", function(){
    	saveNotes();
    });
    main.append(note);
}

