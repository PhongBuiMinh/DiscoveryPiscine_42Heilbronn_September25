window.onload = function () {
    const saved = retrieve_cookie("todoList");
    if (saved) {
        const todos = JSON.parse(saved);
        todos.forEach(todo => add_todo(todo));
    }
};

document.getElementById("btn").addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim() !== "") {
        add_todo(text.trim());
        save_todo();
    }
});

function add_todo(text) {
    const ft_list = document.getElementById("ft_list");
    const todo_div = document.createElement("div");
    todo_div.className = "todo";
    todo_div.textContent = text;

    todo_div.addEventListener("click", () => {
        if (confirm("Do you want to delete this TO DO?")) {
            ft_list.removeChild(todo_div);
            save_todo();
        }
    });

    ft_list.insertBefore(todo_div, ft_list.firstChild);
}

function save_todo() {
    const todos = [];
    document.getElementById("ft_list").querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = "todoList=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
}

function retrieve_cookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}
