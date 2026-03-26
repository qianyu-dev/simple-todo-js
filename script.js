function addTask() {
  const input = document.getElementById("input");
  const text = input.value;

  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = () => li.remove();

  document.getElementById("list").appendChild(li);

  input.value = "";
}
