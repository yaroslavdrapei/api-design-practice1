const fetchGists = async () => {
  const response = await fetch('http://localhost:3000/gists');

  const gists = await response.json();

  const parent = document.querySelector('.gists');
  gists.forEach(g => {
    const {title, codeBlock} = g;
    const gist = document.createElement('p');

    gist.innerHTML = `
    <p class="title">${title}</p>
    <p class="codeBlock">${codeBlock}</p>
    `
  })
};
