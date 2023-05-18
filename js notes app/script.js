const addBtn = document.querySelector("#addBtn");
const main = document.getElementById("main");

function saveNotes(){
	const notes = document.querySelectorAll(".note textarea");
	const data = [];
	notes.forEach((note)=>{
		data.push(note.value);
	})
	// console.log(data);
	localStorage.setItem("notes", JSON.stringify(data));
}

addBtn .addEventListener("click", function(){
	addNote();
})




function addNote(text = ""){
	const note = document.createElement("div");
	note.classList.add("note");
	note.innerHTML = `<div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea>${text}</textarea> `;       
    note.querySelector(".trash").addEventListener("click", function(){
    	note.remove();
    	saveNotes();
    });
    note.querySelector(".save").addEventListener("click", function(){
    	saveNotes();
    });
    note.querySelector("textarea").addEventListener("focusout",()=>{
    	saveNotes()
    })
    main.append(note);
    saveNotes();
}

(function(){
	const lsNotes = JSON.parse(localStorage.getItem("notes"));
	console.log(lsNotes);
	if(lsNotes.length === 0){
		addNote();
	}
	lsNotes.forEach((lsNote)=>{
			addNote(lsNote)
		})
	

} )()