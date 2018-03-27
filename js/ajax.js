fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    // data就是我们请求的repos
    console.log(data)
  });